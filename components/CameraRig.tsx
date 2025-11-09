'use client';

import { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useStore } from '@/lib/store';

export function CameraRig() {
  const { camera, gl } = useThree();
  const rocketPosition = useStore((state) => state.rocketPosition);
  const rocketRotation = useStore((state) => state.rocketRotation);

  const targetPosition = useRef(new THREE.Vector3());
  const targetLookAt = useRef(new THREE.Vector3());
  const zoomDistance = useRef(10); // Distance from rocket

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();

      // Zoom in/out with mouse wheel
      const zoomSpeed = 0.002;
      zoomDistance.current += event.deltaY * zoomSpeed;

      // Clamp zoom distance between 3 and 40 units
      zoomDistance.current = Math.max(3, Math.min(40, zoomDistance.current));
    };

    const canvas = gl.domElement;
    canvas.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      canvas.removeEventListener('wheel', handleWheel);
    };
  }, [gl]);

  useFrame(() => {
    // Camera follows rocket from behind and above, following rotation
    const rocketPos = new THREE.Vector3(...rocketPosition);
    const rocketRot = new THREE.Euler(...rocketRotation);

    // Create offset position behind and above the rocket
    // Negative Z puts camera behind the rocket (rocket nose points in negative Z)
    const offset = new THREE.Vector3(0, 4, -zoomDistance.current);

    // Rotate the offset by the rocket's rotation so camera follows turns
    offset.applyEuler(rocketRot);

    // Set target camera position
    targetPosition.current.copy(rocketPos).add(offset);

    // Smoothly interpolate camera position
    camera.position.lerp(targetPosition.current, 0.1);

    // Look at a point ahead of the rocket (positive Z from camera's perspective)
    const lookAheadOffset = new THREE.Vector3(0, 1, 10); // Look ahead and slightly up
    lookAheadOffset.applyEuler(rocketRot);
    targetLookAt.current.copy(rocketPos).add(lookAheadOffset);

    // Smoothly interpolate camera look-at
    const currentLookAt = new THREE.Vector3();
    camera.getWorldDirection(currentLookAt);
    currentLookAt.multiplyScalar(10);
    currentLookAt.add(camera.position);

    currentLookAt.lerp(targetLookAt.current, 0.1);
    camera.lookAt(currentLookAt);
  });

  return null;
}
