'use client';

import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { useStore } from '@/lib/store';

export function Rocket() {
  const rocketRef = useRef<THREE.Group>(null);
  const velocity = useRef(new THREE.Vector3(0, 0, 0));
  const acceleration = useRef(new THREE.Vector3(0, 0, 0));
  const keysPressed = useRef<Set<string>>(new Set());

  const setRocketPosition = useStore((state) => state.setRocketPosition);

  // Rocket physics constants
  const THRUST = 0.015;
  const DRAG = 0.95;
  const MAX_SPEED = 0.5;
  const ROTATION_SPEED = 0.03;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      keysPressed.current.add(e.key.toLowerCase());
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keysPressed.current.delete(e.key.toLowerCase());
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useFrame(() => {
    if (!rocketRef.current) return;

    const keys = keysPressed.current;
    acceleration.current.set(0, 0, 0);

    // Get rocket's forward and right vectors
    const forward = new THREE.Vector3(0, 0, 1); // Changed from -1 to 1
    const right = new THREE.Vector3(1, 0, 0);
    const up = new THREE.Vector3(0, 1, 0);

    forward.applyQuaternion(rocketRef.current.quaternion);
    right.applyQuaternion(rocketRef.current.quaternion);

    // WASD controls for movement
    if (keys.has('w')) {
      acceleration.current.add(forward.multiplyScalar(THRUST));
    }
    if (keys.has('s')) {
      acceleration.current.add(forward.multiplyScalar(-THRUST * 0.5));
    }
    if (keys.has('a')) {
      rocketRef.current.rotation.y += ROTATION_SPEED;
    }
    if (keys.has('d')) {
      rocketRef.current.rotation.y -= ROTATION_SPEED;
    }

    // Q/E for vertical movement
    if (keys.has('q')) {
      acceleration.current.add(up.multiplyScalar(THRUST * 0.7));
    }
    if (keys.has('e')) {
      acceleration.current.add(up.multiplyScalar(-THRUST * 0.7));
    }

    // Apply acceleration to velocity
    velocity.current.add(acceleration.current);

    // Apply drag
    velocity.current.multiplyScalar(DRAG);

    // Limit speed
    if (velocity.current.length() > MAX_SPEED) {
      velocity.current.setLength(MAX_SPEED);
    }

    // Update position
    rocketRef.current.position.add(velocity.current);

    // Tilt rocket based on velocity for visual effect
    if (velocity.current.length() > 0.01) {
      const tiltAmount = velocity.current.length() * 0.2;
      rocketRef.current.rotation.x = THREE.MathUtils.lerp(
        rocketRef.current.rotation.x,
        -velocity.current.z * tiltAmount,
        0.1
      );
      rocketRef.current.rotation.z = THREE.MathUtils.lerp(
        rocketRef.current.rotation.z,
        -velocity.current.x * tiltAmount,
        0.1
      );
    }

    // Update store with rocket position
    setRocketPosition(rocketRef.current.position.toArray() as [number, number, number]);
  });

  return (
    <group ref={rocketRef} position={[0, 0, 50]}>
      {/* Main nose cone - sharp and sleek */}
      <mesh position={[0, 0, 0.65]} rotation={[Math.PI / 2, 0, 0]}>
        <coneGeometry args={[0.25, 0.6, 8]} />
        <meshStandardMaterial
          color="#ffffff"
          metalness={0.95}
          roughness={0.05}
          emissive="#00ffff"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Cockpit section - glass dome */}
      <mesh position={[0, 0, 0.4]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.8]}>
        <sphereGeometry args={[0.25, 8, 8, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial
          color="#00ccff"
          metalness={0.1}
          roughness={0.05}
          transparent
          opacity={0.4}
          emissive="#00ffff"
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Upper body section - white metallic */}
      <mesh position={[0, 0, 0.1]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.3, 0.32, 0.6, 8]} />
        <meshStandardMaterial
          color="#f0f0f0"
          metalness={0.9}
          roughness={0.15}
        />
      </mesh>

      {/* Mid body section - cyan accent band */}
      <mesh position={[0, 0, -0.15]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.32, 0.32, 0.3, 8]} />
        <meshStandardMaterial
          color="#00d4ff"
          metalness={1}
          roughness={0.1}
          emissive="#00d4ff"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Lower body section - white with taper */}
      <mesh position={[0, 0, -0.4]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.32, 0.28, 0.3, 8]} />
        <meshStandardMaterial
          color="#e8e8e8"
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>

      {/* Glowing tech lines */}
      {[0.25, 0, -0.25].map((z, i) => (
        <mesh key={`line-${i}`} position={[0.31, 0, z]} rotation={[0, 0, 0]}>
          <boxGeometry args={[0.01, 0.15, 0.01]} />
          <meshBasicMaterial
            color="#00ffff"
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}

      {/* Stabilizer fins - swept back design */}
      {[0, 1, 2].map((i) => {
        const angle = (i * Math.PI * 2) / 3;
        return (
          <group key={`fin-${i}`} rotation={[0, 0, angle]}>
            {/* Main fin body */}
            <mesh position={[0.35, 0, -0.5]} rotation={[0, 0.2, 0]}>
              <boxGeometry args={[0.05, 0.6, 0.35]} />
              <meshStandardMaterial
                color="#6b5ce7"
                metalness={0.95}
                roughness={0.1}
                emissive="#6b5ce7"
                emissiveIntensity={0.3}
              />
            </mesh>
            {/* Fin tip accent */}
            <mesh position={[0.37, 0, -0.5]} rotation={[0, 0.2, 0]}>
              <boxGeometry args={[0.02, 0.6, 0.02]} />
              <meshStandardMaterial
                color="#00ffff"
                metalness={1}
                roughness={0}
                emissive="#00ffff"
                emissiveIntensity={1.5}
              />
            </mesh>
            {/* Fin base connection */}
            <mesh position={[0.2, 0, -0.35]}>
              <boxGeometry args={[0.15, 0.15, 0.05]} />
              <meshStandardMaterial
                color="#ff66cc"
                metalness={0.8}
                roughness={0.2}
                emissive="#ff66cc"
                emissiveIntensity={0.3}
              />
            </mesh>
          </group>
        );
      })}

      {/* Engine housing - three nozzles */}
      {[0, 1, 2].map((i) => {
        const angle = (i * Math.PI * 2) / 3;
        const radius = 0.15;
        return (
          <group key={`engine-${i}`}>
            {/* Nozzle */}
            <mesh
              position={[
                Math.cos(angle) * radius,
                Math.sin(angle) * radius,
                -0.7
              ]}
              rotation={[Math.PI / 2, 0, 0]}
            >
              <cylinderGeometry args={[0.08, 0.1, 0.25, 6]} />
              <meshStandardMaterial
                color="#9b59b6"
                metalness={0.9}
                roughness={0.2}
                emissive="#9b59b6"
                emissiveIntensity={0.4}
              />
            </mesh>
            {/* Engine glow */}
            <mesh
              position={[
                Math.cos(angle) * radius,
                Math.sin(angle) * radius,
                -0.82
              ]}
              rotation={[Math.PI / 2, 0, 0]}
            >
              <cylinderGeometry args={[0.06, 0.06, 0.05, 6]} />
              <meshStandardMaterial
                color="#ff4400"
                emissive="#ff6600"
                emissiveIntensity={2}
              />
            </mesh>
            {/* Engine light */}
            <pointLight
              position={[
                Math.cos(angle) * radius,
                Math.sin(angle) * radius,
                -0.85
              ]}
              color="#ff6600"
              intensity={1.5}
              distance={4}
            />
          </group>
        );
      })}

      {/* Central engine core */}
      <mesh position={[0, 0, -0.75]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.15, 6]} />
        <meshStandardMaterial
          color="#0088ff"
          metalness={0.9}
          roughness={0.1}
          emissive="#00ccff"
          emissiveIntensity={1}
        />
      </mesh>

      {/* Wing lights */}
      {[0, 1, 2].map((i) => {
        const angle = (i * Math.PI * 2) / 3;
        return (
          <mesh
            key={`winglight-${i}`}
            position={[
              Math.cos(angle) * 0.32,
              Math.sin(angle) * 0.32,
              -0.2
            ]}
          >
            <sphereGeometry args={[0.03, 6, 6]} />
            <meshBasicMaterial
              color="#00ffff"
            />
          </mesh>
        );
      })}

      {/* Headlight beam */}
      <pointLight
        position={[0, 0, 0.8]}
        color="#00ffff"
        intensity={2}
        distance={8}
      />

      {/* Thrust effects - three plumes */}
      {keysPressed.current.has('w') && (
        <group>
          {[0, 1, 2].map((i) => {
            const angle = (i * Math.PI * 2) / 3;
            const radius = 0.15;
            return (
              <group key={`thrust-${i}`}>
                <mesh
                  position={[
                    Math.cos(angle) * radius,
                    Math.sin(angle) * radius,
                    -1
                  ]}
                  rotation={[Math.PI / 2, 0, 0]}
                >
                  <coneGeometry args={[0.08, 0.8, 6]} />
                  <meshBasicMaterial
                    color="#ff8800"
                    transparent
                    opacity={0.7}
                  />
                </mesh>
                <mesh
                  position={[
                    Math.cos(angle) * radius,
                    Math.sin(angle) * radius,
                    -0.95
                  ]}
                  rotation={[Math.PI / 2, 0, 0]}
                >
                  <coneGeometry args={[0.04, 0.5, 5]} />
                  <meshBasicMaterial
                    color="#ffff00"
                    transparent
                    opacity={0.9}
                  />
                </mesh>
              </group>
            );
          })}
        </group>
      )}
    </group>
  );
}
