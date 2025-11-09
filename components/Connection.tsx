'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ConnectionProps {
  start: [number, number, number];
  end: [number, number, number];
  color: string;
  active?: boolean;
}

export function Connection({ start, end, color, active = false }: ConnectionProps) {
  const lineRef = useRef<THREE.Line>(null);

  // Create curved line using quadratic bezier
  const curve = useMemo(() => {
    const startVec = new THREE.Vector3(...start);
    const endVec = new THREE.Vector3(...end);

    // Control point for curve (slightly offset for organic feel)
    const midPoint = new THREE.Vector3().lerpVectors(startVec, endVec, 0.5);
    const offset = new THREE.Vector3(
      (Math.random() - 0.5) * 2,
      (Math.random() - 0.5) * 2,
      (Math.random() - 0.5) * 2
    );
    midPoint.add(offset);

    return new THREE.QuadraticBezierCurve3(startVec, midPoint, endVec);
  }, [start, end]);

  const points = useMemo(() => curve.getPoints(50), [curve]);
  const geometry = useMemo(() => new THREE.BufferGeometry().setFromPoints(points), [points]);

  // Animate the connection
  useFrame((state) => {
    if (lineRef.current && lineRef.current.material instanceof THREE.LineBasicMaterial) {
      const time = state.clock.getElapsedTime();

      // Pulse opacity
      const pulse = Math.sin(time * 2) * 0.2 + 0.5;
      lineRef.current.material.opacity = active ? pulse * 0.8 : pulse * 0.3;
    }
  });

  return (
    // @ts-expect-error - React Three Fiber uses lowercase for Three.js objects
    <line ref={lineRef} geometry={geometry}>
      {/* @ts-expect-error - React Three Fiber material components */}
      <lineBasicMaterial
        color={color}
        transparent
        opacity={active ? 0.6 : 0.2}
        linewidth={active ? 2 : 1}
      />
    </line>
  );
}
