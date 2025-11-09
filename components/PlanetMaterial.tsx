import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Planet shader with procedural noise for surface detail
export const PlanetShaderMaterial = shaderMaterial(
  {
    time: 0,
    baseColor: new THREE.Color('#ff0000'),
    accentColor: new THREE.Color('#00ff00'),
    planetType: 0, // 0=rocky, 1=gas, 2=ice, 3=lava
    seed: 0.0, // Random seed for texture variation
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
  // Fragment shader
  `
    uniform float time;
    uniform vec3 baseColor;
    uniform vec3 accentColor;
    uniform float planetType;
    uniform float seed;

    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vPosition;

    // Improved noise function
    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
    }

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

    // Simplified 2-octave fbm for better performance
    float fbm(vec2 p) {
      return noise(p) * 0.6 + noise(p * 2.0) * 0.3;
    }

    void main() {
      vec3 finalColor;
      float intensity;

      // Use seed to vary pattern characteristics significantly
      float scaleVar = 6.0 + seed * 12.0; // 6-18 range
      float offsetX = seed * 100.0; // Large offset for pattern variation
      float offsetY = fract(seed * 7.919) * 100.0; // Different offset for Y
      vec2 seedOffset = vec2(offsetX, offsetY);

      // Rocky planet
      if(planetType < 0.5) {
        vec2 p = vUv * scaleVar + time * 0.02 + seedOffset;
        float n = fbm(p);

        // Vary continent/ocean ratio significantly
        float lowThresh = 0.25 + seed * 0.3; // 0.25-0.55
        float highThresh = 0.55 + seed * 0.3; // 0.55-0.85
        float continents = smoothstep(lowThresh, highThresh, n);

        vec3 oceanColor = baseColor * (0.4 + seed * 0.4);
        vec3 landColor = accentColor * (0.8 + seed * 0.4);
        finalColor = mix(oceanColor, landColor, continents);

        // Add varied detail patterns
        float detailScale = 15.0 + seed * 20.0;
        float detail = noise(vUv * detailScale + seedOffset);
        finalColor += detail * (0.05 + seed * 0.15);
        intensity = 0.3;
      }
      // Gas giant
      else if(planetType < 1.5) {
        float bandFreq = 12.0 + seed * 20.0; // 12-32 bands
        float flowSpeed = 0.3 + seed * 0.6;
        vec2 p = vec2(vUv.x * scaleVar + time * flowSpeed, vUv.y * (2.0 + seed * 3.0)) + seedOffset;
        float n = fbm(p);
        float bands = sin(vUv.y * bandFreq + n * (1.5 + seed * 2.0)) * 0.5 + 0.5;

        finalColor = mix(baseColor, accentColor, bands);

        // Varied swirl patterns
        float swirlScale = 4.0 + seed * 8.0;
        float swirl = fbm(vUv * swirlScale + vec2(time * flowSpeed, 0.0) + seedOffset);
        finalColor = mix(finalColor, accentColor * (1.0 + seed * 0.5), swirl * (0.2 + seed * 0.3));
        intensity = 0.4;
      }
      // Ice planet
      else if(planetType < 2.5) {
        float iceScale = 8.0 + seed * 16.0; // 8-24
        vec2 p = vUv * iceScale + seedOffset;
        float n = fbm(p);

        // Vary crack patterns
        float crackThreshold = 0.45 + seed * 0.15;
        float cracks = smoothstep(crackThreshold, crackThreshold + 0.02, n);

        vec3 iceColor = vec3(0.8 + seed * 0.15, 0.9 + seed * 0.08, 0.95 + seed * 0.05);
        vec3 crackColor = baseColor * (0.6 + seed * 0.4);
        finalColor = mix(iceColor, crackColor, cracks);

        // Varied sparkle
        float sparkleScale = 40.0 + seed * 40.0;
        float sparkle = noise(vUv * sparkleScale + time * 2.0 + seedOffset);
        float sparkleThresh = 0.88 + seed * 0.08;
        if(sparkle > sparkleThresh) {
          finalColor += vec3(0.4, 0.7 + seed * 0.3, 1.0) * (sparkle - sparkleThresh) * 15.0;
        }
        intensity = 0.5;
      }
      // Lava planet
      else {
        float lavaScale = 6.0 + seed * 8.0;
        vec2 p = vUv * lavaScale + time * (0.2 + seed * 0.4) + seedOffset;
        float n = fbm(p);
        float flowFreq = 8.0 + seed * 12.0;
        float lavaFlow = sin(n * flowFreq + time * 2.0) * 0.5 + 0.5;

        vec3 darkRock = vec3(0.15 + seed * 0.15, 0.08 + seed * 0.08, 0.03);
        vec3 lavaColor = mix(vec3(1.0, 0.4, 0.0), vec3(1.0, 0.6, 0.1), seed);
        vec3 brightLava = vec3(1.0, 0.9 + seed * 0.1, 0.2 + seed * 0.3);

        float lavaThresh = 0.2 + seed * 0.3;
        float lavaAmount = smoothstep(lavaThresh, lavaThresh + 0.5, n);
        finalColor = mix(darkRock, lavaColor, lavaAmount);
        finalColor = mix(finalColor, brightLava, lavaFlow * lavaAmount);

        intensity = 0.8 + lavaFlow * 0.5;
      }

      // Lighting
      vec3 lightDir = normalize(vec3(1.0, 1.0, 2.0));
      float NdotL = max(dot(vNormal, lightDir), 0.0);
      float lighting = mix(0.3, 1.0, NdotL);

      finalColor *= lighting;

      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
);
