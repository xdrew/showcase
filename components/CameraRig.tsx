'use client';

import { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useStore } from '@/lib/store';

export function CameraRig() {
  const { camera, gl } = useThree();
  const rocketPosition = useStore((state) => state.rocketPosition);
  const rocketRotation = useStore((state) => state.rocketRotation);
  const selectedProject = useStore((state) => state.selectedProject);

  const targetPosition = useRef(new THREE.Vector3());
  const targetLookAt = useRef(new THREE.Vector3());
  const zoomDistance = useRef(6); // Distance from rocket
  const planetViewMode = useRef(false);
  const planetPosition = useRef(new THREE.Vector3());

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
    const selectedPlanetPosition = useStore.getState().selectedPlanetPosition;

    // Check if we should be in planet view mode
    if (selectedPlanetPosition && selectedProject) {
      planetViewMode.current = true;
      planetPosition.current.set(...selectedPlanetPosition);
    } else {
      planetViewMode.current = false;
    }

    if (planetViewMode.current) {
      // Planet view mode - zoom to planet
      const offset = new THREE.Vector3(3, 2, 5); // Position relative to planet
      targetPosition.current.copy(planetPosition.current).add(offset);

      // Smoothly move camera to planet view
      camera.position.lerp(targetPosition.current, 0.05);

      // Look at the planet
      targetLookAt.current.copy(planetPosition.current);

      const currentLookAt = new THREE.Vector3();
      camera.getWorldDirection(currentLookAt);
      currentLookAt.multiplyScalar(10);
      currentLookAt.add(camera.position);

      currentLookAt.lerp(targetLookAt.current, 0.05);
      camera.lookAt(currentLookAt);
    } else {
      // Normal mode - follow rocket
      const rocketPos = new THREE.Vector3(...rocketPosition);
      const rocketRot = new THREE.Euler(...rocketRotation);

      // Create offset position behind and above the rocket
      const offset = new THREE.Vector3(0, 4, -zoomDistance.current);

      // Rotate the offset by the rocket's rotation so camera follows turns
      offset.applyEuler(rocketRot);

      // Set target camera position
      targetPosition.current.copy(rocketPos).add(offset);

      // Smoothly interpolate camera position with more inertia
      camera.position.lerp(targetPosition.current, 0.05);

      // Look at a point ahead of the rocket
      const lookAheadOffset = new THREE.Vector3(0, 1, 10);
      lookAheadOffset.applyEuler(rocketRot);
      targetLookAt.current.copy(rocketPos).add(lookAheadOffset);

      // Smoothly interpolate camera look-at with more inertia
      const currentLookAt = new THREE.Vector3();
      camera.getWorldDirection(currentLookAt);
      currentLookAt.multiplyScalar(10);
      currentLookAt.add(camera.position);

      currentLookAt.lerp(targetLookAt.current, 0.05);
      camera.lookAt(currentLookAt);
    }
  });

  return null;
}
