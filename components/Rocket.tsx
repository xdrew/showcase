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
  const engineSoundRef = useRef<HTMLAudioElement | null>(null);

  const setRocketPosition = useStore((state) => state.setRocketPosition);
  const setRocketRotation = useStore((state) => state.setRocketRotation);
  const soundEnabled = useStore((state) => state.soundEnabled);
  const touchControls = useStore((state) => state.touchControls);

  // Load the GLB model
  const { scene } = useGLTF('/molandak.glb');

  // Rocket physics constants
  const THRUST = 0.015;
  const DRAG = 0.95;
  const MAX_SPEED = 0.5;
  const ROTATION_SPEED = 0.03;

  // Load engine sound
  useEffect(() => {
    const audio = new Audio('/rocket-engine.mp3');
    audio.loop = true;
    audio.volume = 0.5;
    engineSoundRef.current = audio;

    return () => {
      if (engineSoundRef.current) {
        engineSoundRef.current.pause();
        engineSoundRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      keysPressed.current.add(e.code);
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keysPressed.current.delete(e.code);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  // Apply material to the loaded model
  useEffect(() => {
    if (scene) {
      // Use MeshNormalMaterial which automatically shows geometry through colors
      // This gives depth without needing complex lighting
      const normalMaterial = new THREE.MeshNormalMaterial({
        flatShading: false,
        side: THREE.DoubleSide,
      });

      scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          // Use normal material to show geometry
          child.material = normalMaterial;
        }
      });
    }
  }, [scene]);

  useFrame(() => {
    if (!rocketRef.current) return;

    const keys = keysPressed.current;
    acceleration.current.set(0, 0, 0);

    // Get rocket's forward and right vectors
    const forward = new THREE.Vector3(0, 0, 1);
    const right = new THREE.Vector3(1, 0, 0);
    const up = new THREE.Vector3(0, 1, 0);

    forward.applyQuaternion(rocketRef.current.quaternion);
    right.applyQuaternion(rocketRef.current.quaternion);

    // Check if engine should be on (using key codes or touch controls)
    const isEngineOn = keys.has('KeyW') || keys.has('KeyS') || Math.abs(touchControls.thrust) > 0.1;

    // Control engine sound
    if (engineSoundRef.current) {
      if (isEngineOn && soundEnabled) {
        if (engineSoundRef.current.paused) {
          engineSoundRef.current.play().catch(() => {
            // Handle autoplay restrictions
          });
        }
      } else {
        if (!engineSoundRef.current.paused) {
          engineSoundRef.current.pause();
        }
      }
    }

    // WASD controls for movement (using key codes - works with any layout)
    if (keys.has('KeyW')) {
      acceleration.current.add(forward.multiplyScalar(THRUST));
    }
    if (keys.has('KeyS')) {
      acceleration.current.add(forward.multiplyScalar(-THRUST * 0.5));
    }
    if (keys.has('KeyA')) {
      rocketRef.current.rotation.y += ROTATION_SPEED;
    }
    if (keys.has('KeyD')) {
      rocketRef.current.rotation.y -= ROTATION_SPEED;
    }

    // Q/E for vertical movement
    if (keys.has('KeyQ')) {
      acceleration.current.add(up.multiplyScalar(THRUST * 0.7));
    }
    if (keys.has('KeyE')) {
      acceleration.current.add(up.multiplyScalar(-THRUST * 0.7));
    }

    // Touch controls for mobile
    if (Math.abs(touchControls.thrust) > 0.05) {
      acceleration.current.add(forward.multiplyScalar(touchControls.thrust * THRUST));
    }
    if (Math.abs(touchControls.rotation) > 0.05) {
      rocketRef.current.rotation.y -= touchControls.rotation * ROTATION_SPEED;
    }
    if (Math.abs(touchControls.vertical) > 0.05) {
      acceleration.current.add(up.multiplyScalar(touchControls.vertical * THRUST * 0.7));
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

    // Update store with rocket position and rotation
    setRocketPosition(rocketRef.current.position.toArray() as [number, number, number]);
    setRocketRotation(rocketRef.current.rotation.toArray().slice(0, 3) as [number, number, number]);
  });

  return (
    <group ref={rocketRef} position={[0, 0, 50]} rotation={[0, Math.PI, 0]} scale={[1.5, 1.5, 1.5]}>
      {/* Key light - main illumination */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.5}
        castShadow={false}
      />

      {/* Fill light - softer opposite side */}
      <directionalLight
        position={[-3, 3, -3]}
        intensity={0.8}
        castShadow={false}
      />

      {/* Rim light - highlights edges from behind */}
      <directionalLight
        position={[0, 2, -5]}
        intensity={0.5}
        castShadow={false}
      />

      {/* Load the GLB model */}
      <primitive object={scene.clone()} />

      {/* Bright center light to make model visible */}
      <pointLight
        position={[0, 0, 0]}
        color="#ffffff"
        intensity={10}
        distance={20}
      />

      {/* Headlight beam */}
      <pointLight
        position={[0, 0, 2]}
        color="#ffffff"
        intensity={3}
        distance={10}
      />

    </group>
  );
}
