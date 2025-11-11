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
  const tourStarted = useStore((state) => state.tourStarted);

  const targetPosition = useRef(new THREE.Vector3());
  const targetLookAt = useRef(new THREE.Vector3());
  const zoomDistance = useRef(6); // Distance from rocket
  const planetViewMode = useRef(false);
  const planetPosition = useRef(new THREE.Vector3());
  const introMode = useRef(true);
  const transitionProgress = useRef(0);

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

  useFrame((state, delta) => {
    const selectedPlanetPosition = useStore.getState().selectedPlanetPosition;

    // Handle intro to tour transition
    if (tourStarted && introMode.current) {
      transitionProgress.current += delta * 0.5; // Smooth 2-second transition
      if (transitionProgress.current >= 1) {
        introMode.current = false;
        transitionProgress.current = 1;
      }
    }

    // Intro mode - camera looks at rocket from the front (closeup)
    if (introMode.current || transitionProgress.current < 1) {
      const rocketPos = new THREE.Vector3(...rocketPosition);
      const rocketRot = new THREE.Euler(...rocketRotation);

      // Position camera much closer and offset to the right so ship appears on the left side
      const introOffset = new THREE.Vector3(-4, 0, 5);
      introOffset.applyEuler(rocketRot);
      const introCameraPos = rocketPos.clone().add(introOffset);

      // Position for normal flight mode
      const normalOffset = new THREE.Vector3(0, 4, -zoomDistance.current);
      normalOffset.applyEuler(rocketRot);
      const normalCameraPos = rocketPos.clone().add(normalOffset);

      // Smooth easing function for more natural transition
      const t = transitionProgress.current;
      const easedT = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; // Ease in-out quad

      // Interpolate between intro and normal position
      targetPosition.current.lerpVectors(introCameraPos, normalCameraPos, easedT);
      camera.position.lerp(targetPosition.current, 0.1);

      // Look at rocket during intro, then look ahead during transition
      const lookAheadOffset = new THREE.Vector3(0, 1, 10);
      lookAheadOffset.applyEuler(rocketRot);
      const normalLookAt = rocketPos.clone().add(lookAheadOffset);

      targetLookAt.current.lerpVectors(rocketPos, normalLookAt, easedT);

      const currentLookAt = new THREE.Vector3();
      camera.getWorldDirection(currentLookAt);
      currentLookAt.multiplyScalar(10);
      currentLookAt.add(camera.position);

      currentLookAt.lerp(targetLookAt.current, 0.1);
      camera.lookAt(currentLookAt);

      // Return during transition to prevent other camera modes from interfering
      if (transitionProgress.current < 1) return;
    }

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
