'use client';

import { useMemo } from 'react';
import { projects, categories } from '@/data/projects';
import { Neuron } from './Neuron';
import { Connection } from './Connection';
import { useStore } from '@/lib/store';
import * as THREE from 'three';

interface ProjectWithPosition {
  project: typeof projects[0];
  position: [number, number, number];
  color: string;
}

export function NeuralNetwork() {
  const selectedCategory = useStore((state) => state.selectedCategory);
  const searchQuery = useStore((state) => state.searchQuery);
  const selectedProject = useStore((state) => state.selectedProject);

  // Position neurons in 3D space organized by category
  const projectsWithPositions = useMemo<ProjectWithPosition[]>(() => {
    const categoryMap = new Map(categories.map(cat => [cat.id, cat]));
    const positioned: ProjectWithPosition[] = [];

    // Group projects by category
    const grouped = projects.reduce((acc, project) => {
      if (!acc[project.category]) {
        acc[project.category] = [];
      }
      acc[project.category].push(project);
      return acc;
    }, {} as Record<string, typeof projects>);

    // Position each category cluster in a circle
    const categoryRadius = 8;
    categories.forEach((category, catIndex) => {
      const categoryAngle = (catIndex / categories.length) * Math.PI * 2;
      const categoryX = Math.cos(categoryAngle) * categoryRadius;
      const categoryZ = Math.sin(categoryAngle) * categoryRadius;

      const categoryProjects = grouped[category.id] || [];
      const projectCount = categoryProjects.length;

      // Arrange projects within category in a cluster
      categoryProjects.forEach((project, projIndex) => {
        // Create organic cluster using spherical coordinates
        const phi = Math.acos(2 * (projIndex / projectCount) - 1);
        const theta = Math.sqrt(projectCount * Math.PI) * phi;

        const clusterRadius = 2 + Math.random() * 1.5;
        const x = categoryX + Math.sin(phi) * Math.cos(theta) * clusterRadius;
        const y = (Math.random() - 0.5) * 3;
        const z = categoryZ + Math.sin(phi) * Math.sin(theta) * clusterRadius;

        positioned.push({
          project,
          position: [x, y, z],
          color: category.color,
        });
      });
    });

    return positioned;
  }, []);

  // Filter based on search and category
  const filteredProjects = useMemo(() => {
    return projectsWithPositions.filter(({ project }) => {
      const matchesCategory = !selectedCategory || project.category === selectedCategory;
      const matchesSearch = !searchQuery ||
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [projectsWithPositions, selectedCategory, searchQuery]);

  // Create connections between nearby projects in same category
  const connections = useMemo(() => {
    const conns: Array<{
      start: [number, number, number];
      end: [number, number, number];
      color: string;
      active: boolean;
    }> = [];

    filteredProjects.forEach(({ project: proj1, position: pos1, color }, i) => {
      filteredProjects.slice(i + 1).forEach(({ project: proj2, position: pos2 }) => {
        // Connect projects in same category that are close
        if (proj1.category === proj2.category) {
          const distance = new THREE.Vector3(...pos1).distanceTo(new THREE.Vector3(...pos2));

          if (distance < 3) {
            const isActive = selectedProject?.category === proj1.category;
            conns.push({
              start: pos1,
              end: pos2,
              color,
              active: isActive,
            });
          }
        }
      });
    });

    return conns;
  }, [filteredProjects, selectedProject]);

  return (
    /* @ts-expect-error - React Three Fiber intrinsic elements */
    <group>
      {/* Render connections first (so they're behind neurons) */}
      {connections.map((conn, i) => (
        <Connection
          key={`conn-${i}`}
          start={conn.start}
          end={conn.end}
          color={conn.color}
          active={conn.active}
        />
      ))}

      {/* Render neurons */}
      {filteredProjects.map(({ project, position, color }) => (
        <Neuron
          key={project.id}
          project={project}
          position={position}
          color={color}
        />
      ))}

      {/* Ambient particles in background */}
      {/* @ts-expect-error - React Three Fiber intrinsic elements */}
      <ambientLight intensity={0.2} />
      {/* @ts-expect-error - React Three Fiber intrinsic elements */}
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      {/* @ts-expect-error - React Three Fiber intrinsic elements */}
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#00d4ff" />
      {/* @ts-expect-error - React Three Fiber intrinsic elements */}
    </group>
  );
}
