#!/usr/bin/env node
/**
 * Simple OBJ vertex reduction script
 * This creates a basic reduction by sampling vertices
 * For better results, use Blender or MeshLab
 */

const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, '../public/molandak.obj');
const outputFile = path.join(__dirname, '../public/molandak-simple.obj');

console.log('Reading OBJ file...');
const content = fs.readFileSync(inputFile, 'utf8');
const lines = content.split('\n');

const vertices = [];
const faces = [];
const normals = [];

// Parse OBJ
console.log('Parsing geometry...');
for (const line of lines) {
  if (line.startsWith('v ')) {
    vertices.push(line);
  } else if (line.startsWith('f ')) {
    faces.push(line);
  } else if (line.startsWith('vn ')) {
    normals.push(line);
  }
}

console.log(`Original: ${vertices.length} vertices, ${faces.length} faces`);

// Simple reduction: keep every Nth vertex/face
const reductionFactor = 5; // Keep 1 in 5 (80% reduction)
const reducedVertices = vertices.filter((_, i) => i % reductionFactor === 0);
const reducedFaces = faces.filter((_, i) => i % reductionFactor === 0);
const reducedNormals = normals.filter((_, i) => i % reductionFactor === 0);

console.log(`Reduced: ${reducedVertices.length} vertices, ${reducedFaces.length} faces`);

// Write simplified OBJ
console.log('Writing simplified OBJ...');
const output = [
  '# Simplified OBJ',
  ...reducedVertices,
  ...reducedNormals,
  ...reducedFaces
].join('\n');

fs.writeFileSync(outputFile, output);

const originalSize = fs.statSync(inputFile).size;
const newSize = fs.statSync(outputFile).size;

console.log(`\nOriginal size: ${(originalSize / 1024 / 1024).toFixed(2)} MB`);
console.log(`New size: ${(newSize / 1024 / 1024).toFixed(2)} MB`);
console.log(`Saved: ${((1 - newSize / originalSize) * 100).toFixed(1)}%`);
console.log(`\nOutput: ${outputFile}`);
console.log('\nWARNING: This is a crude reduction. For best results, use Blender or MeshLab.');
