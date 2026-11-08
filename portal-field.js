import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js";

const FRINGE_COLORS = {
  cobalt: "#1e3a8a",
  violet: "#8b5cf6",
  teal: "#0d9488",
  ember: "#c2410c"
};

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;
  uniform vec2 u_resolution;
  uniform vec2 u_mouse;
  uniform vec3 u_colorFringe;
  uniform float u_time;

  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = x0.x > x0.y ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m * m;
    m = m * m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  float sdArc(vec2 p, vec2 center, float radius, float width, float warp, float t) {
    p.y += sin(p.x * 2.0 + t * 0.3) * warp;
    p.x += snoise(p * 1.5 + vec2(t * 0.1)) * warp * 0.8;
    return abs(length(p - center) - radius) - width;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    float aspect = u_resolution.x / u_resolution.y;
    vec2 p = (uv - 0.5) * vec2(aspect, 1.0) + u_mouse;
    float t = u_time;
    float d1 = sdArc(p, vec2(0.0), 0.60, 0.02, 0.15, t);
    float d2 = sdArc(p, vec2(0.0), 0.65, 0.06, 0.20, t);
    float coreGlow = exp(-d1 * 30.0);
    float fringeGlow = exp(-d2 * 10.0);
    float wash = exp(-length(p) * 2.4) * (sin(t * 0.5) * 0.2 + 0.8);
    vec3 color = vec3(coreGlow);
    color += u_colorFringe * fringeGlow;
    color += u_colorFringe * wash * 0.075;
    color = 1.0 - exp(-color * 1.5);
    float alpha = clamp(max(coreGlow, fringeGlow * 0.72) + wash * 0.08, 0.0, 1.0);
    gl_FragColor = vec4(color, alpha);
  }
`;

function hexColor(hex) {
  const color = new THREE.Color(hex);
  return new THREE.Vector3(color.r, color.g, color.b);
}

export function createPortalField({ fringeColor = "cobalt", mouseAmount = 0.05 } = {}) {
  const canvas = document.querySelector("#portal-canvas");
  const host = canvas?.parentElement;
  if (!canvas || !host) return () => {};

  const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  let reducedMotion = reducedMotionQuery.matches;
  let renderer;

  try {
    THREE.ColorManagement.enabled = false;
    renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "low-power",
      premultipliedAlpha: false
    });
  } catch (error) {
    host.classList.add("portal__webgl--fallback");
    console.warn("GMZ Portal Field: WebGL is unavailable.", error);
    return () => {};
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = THREE.NoToneMapping;
  renderer.outputColorSpace = THREE.LinearSRGBColorSpace;

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
  camera.position.z = 1;

  const uniforms = {
    u_resolution: { value: new THREE.Vector2(1, 1) },
    u_mouse: { value: new THREE.Vector2(0, 0) },
    u_colorFringe: { value: hexColor(FRINGE_COLORS[fringeColor] || FRINGE_COLORS.cobalt) },
    u_time: { value: reducedMotion ? 8 : 0 }
  };

  const geometry = new THREE.PlaneGeometry(2, 2);
  const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthTest: false,
    depthWrite: false
  });
  scene.add(new THREE.Mesh(geometry, material));

  let frameId = 0;
  let visible = true;
  let disposed = false;
  let startTime = performance.now();
  const targetMouse = new THREE.Vector2(0, 0);
  const currentMouse = new THREE.Vector2(0, 0);
  const amount = Math.max(0, Math.min(Number(mouseAmount) || 0, 0.15));

  const setFringeColor = (preset) => {
    if (FRINGE_COLORS[preset]) {
      uniforms.u_colorFringe.value = hexColor(FRINGE_COLORS[preset]);
    }
  };
  window.gmzSetFringeColor = setFringeColor;

  const resize = () => {
    if (disposed) return;
    renderer.setSize(Math.max(host.clientWidth, 1), Math.max(host.clientHeight, 1), false);
    const size = new THREE.Vector2();
    renderer.getDrawingBufferSize(size);
    uniforms.u_resolution.value.copy(size);
    renderer.render(scene, camera);
  };

  const stop = () => {
    cancelAnimationFrame(frameId);
    frameId = 0;
  };

  const render = (now) => {
    if (disposed || !visible || reducedMotion) return;
    uniforms.u_time.value = (now - startTime) / 1000;
    currentMouse.lerp(targetMouse, 0.03);
    uniforms.u_mouse.value.copy(currentMouse);
    renderer.render(scene, camera);
    frameId = requestAnimationFrame(render);
  };

  const start = () => {
    if (disposed || !visible) return;
    stop();
    if (reducedMotion) {
      uniforms.u_time.value = 8;
      uniforms.u_mouse.value.set(0, 0);
      renderer.render(scene, camera);
      return;
    }
    startTime = performance.now();
    frameId = requestAnimationFrame(render);
  };

  const onPointerMove = (event) => {
    if (reducedMotion) return;
    const rect = host.getBoundingClientRect();
    const x = (event.clientX - rect.left) / Math.max(rect.width, 1) - 0.5;
    const y = (event.clientY - rect.top) / Math.max(rect.height, 1) - 0.5;
    targetMouse.set(x * amount, -y * amount);
  };
  const onPointerLeave = () => targetMouse.set(0, 0);
  const onMotionChange = (event) => {
    reducedMotion = event.matches;
    if (reducedMotion) {
      stop();
      uniforms.u_time.value = 8;
      uniforms.u_mouse.value.set(0, 0);
      renderer.render(scene, camera);
    } else {
      start();
    }
  };

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(host);
  const intersectionObserver = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) start();
    else stop();
  }, { threshold: 0.01 });
  intersectionObserver.observe(host);

  host.addEventListener("pointermove", onPointerMove, { passive: true });
  host.addEventListener("pointerleave", onPointerLeave);
  reducedMotionQuery.addEventListener("change", onMotionChange);

  resize();
  start();

  return () => {
    disposed = true;
    stop();
    resizeObserver.disconnect();
    intersectionObserver.disconnect();
    host.removeEventListener("pointermove", onPointerMove);
    host.removeEventListener("pointerleave", onPointerLeave);
    reducedMotionQuery.removeEventListener("change", onMotionChange);
    if (window.gmzSetFringeColor === setFringeColor) delete window.gmzSetFringeColor;
    geometry.dispose();
    material.dispose();
    renderer.dispose();
  };
}

const disposePortal = createPortalField({ fringeColor: "cobalt", mouseAmount: 0.05 });

document.querySelectorAll(".swatch").forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.color;
    if (!FRINGE_COLORS[selected]) return;
    document.querySelectorAll(".swatch").forEach((swatch) => {
      swatch.setAttribute("aria-pressed", String(swatch === button));
    });
    window.gmzSetFringeColor?.(selected);
  });
});

window.addEventListener("pagehide", disposePortal, { once: true });
