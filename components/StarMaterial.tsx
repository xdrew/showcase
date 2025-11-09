import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Advanced star shader with solar surface effects
export const StarShaderMaterial = shaderMaterial(
  {
    time: 0,
    color: new THREE.Color('#ff6600'),
  },
  // Vertex shader
  `
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vPosition;

    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment shader - Simplified for compatibility
  `
    uniform float time;
    uniform vec3 color;
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vPosition;

    // Simple hash
    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
    }

    // Simple noise
    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      f = f * f * (3.0 - 2.0 * f);

      float a = hash(i);
      float b = hash(i + vec2(1.0, 0.0));
      float c = hash(i + vec2(0.0, 1.0));
      float d = hash(i + vec2(1.0, 1.0));

      return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
    }

    // Simple 2-octave noise
    float fbm(vec2 p) {
      return noise(p) * 0.6 + noise(p * 2.0) * 0.3;
    }

    void main() {
      // Surface turbulence with time animation
      vec2 uv = vUv * 4.0;
      float n1 = fbm(uv + time * 0.1);
      float n2 = fbm(uv * 1.5 - time * 0.08);

      float surface = n1 * 0.6 + n2 * 0.4;

      // Edge glow (fresnel effect)
      vec3 viewDir = vec3(0.0, 0.0, 1.0);
      float fresnel = pow(1.0 - abs(dot(normalize(vNormal), viewDir)), 2.0);

      // Color mixing - hotter center, cooler edges
      vec3 hotColor = mix(color, vec3(1.0, 1.0, 0.95), 0.35);
      vec3 coolColor = color * 0.75;

      // Combine surface detail with base color
      vec3 finalColor = mix(coolColor, hotColor, surface);

      // Add edge brightening
      finalColor += color * fresnel * 0.6;

      // Boost overall brightness for star effect
      finalColor *= 1.4;

      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
);
