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
  // Fragment shader - Solar surface with plasma effects
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

    // Multi-octave fbm for detailed plasma
    float fbm(vec2 p) {
      float value = 0.0;
      float amplitude = 0.5;
      for(int i = 0; i < 4; i++) {
        value += amplitude * noise(p);
        p *= 2.0;
        amplitude *= 0.5;
      }
      return value;
    }

    void main() {
      // Multi-layered turbulent surface
      vec2 uv = vUv * 8.0;

      // Large plasma cells (convection zones)
      float cells = fbm(uv * 0.5 + time * 0.05);

      // Medium turbulence (granulation)
      float granulation = fbm(uv * 1.5 + time * 0.15);

      // Fine turbulence (magnetic field lines)
      float fineTurb = fbm(uv * 3.0 - time * 0.1);

      // Hot spots and flares
      float hotSpots = noise(uv * 2.0 + time * 0.2);
      hotSpots = pow(hotSpots, 3.0) * 2.0; // Make them sharp and bright

      // Combine turbulence layers
      float surface = cells * 0.3 + granulation * 0.4 + fineTurb * 0.3;

      // Edge glow (fresnel effect - corona)
      vec3 viewDir = normalize(vPosition);
      float fresnel = pow(1.0 - abs(dot(normalize(vNormal), viewDir)), 3.0);

      // Color gradient - very hot yellow-white to cooler orange-red
      vec3 darkColor = color * 0.6; // Deep red/orange
      vec3 midColor = color; // Base star color
      vec3 hotColor = mix(color, vec3(1.0, 0.95, 0.8), 0.6); // Hot yellow-white
      vec3 veryHotColor = vec3(1.0, 1.0, 0.95); // Brightest spots

      // Build the surface color with multiple layers
      vec3 finalColor = mix(darkColor, midColor, surface);
      finalColor = mix(finalColor, hotColor, granulation * 0.6);

      // Add hot spots (solar flares)
      finalColor = mix(finalColor, veryHotColor, hotSpots * 0.4);

      // Add bright edge corona
      finalColor += color * fresnel * 1.2;
      finalColor += vec3(1.0, 0.9, 0.7) * fresnel * 0.8;

      // Boost overall intensity
      finalColor *= 1.6;

      // Add slight pulsation for living star effect
      finalColor *= 1.0 + sin(time * 1.5) * 0.05;

      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
);
