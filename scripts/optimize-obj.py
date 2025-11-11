#!/usr/bin/env python3
"""
OBJ optimization script using Blender
Reduces polygon count while maintaining visual quality

Usage: blender --background --python optimize-obj.py
"""

import bpy
import sys

# Clear default scene
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete()

# Import OBJ
input_file = "public/molandak.obj"
output_file = "public/molandak-optimized.obj"

print(f"Importing {input_file}...")
bpy.ops.import_scene.obj(filepath=input_file)

# Get the imported object
obj = bpy.context.selected_objects[0]
bpy.context.view_layer.objects.active = obj

print(f"Original vertices: {len(obj.data.vertices)}")
print(f"Original polygons: {len(obj.data.polygons)}")

# Add Decimate modifier to reduce polygon count
print("Applying decimate modifier...")
decimate = obj.modifiers.new(name="Decimate", type='DECIMATE')
decimate.ratio = 0.1  # Reduce to 10% of original polygons (adjust as needed)
decimate.use_collapse_triangulate = True

# Apply modifier
bpy.ops.object.modifier_apply(modifier="Decimate")

print(f"Optimized vertices: {len(obj.data.vertices)}")
print(f"Optimized polygons: {len(obj.data.polygons)}")

# Export optimized OBJ
print(f"Exporting to {output_file}...")
bpy.ops.export_scene.obj(
    filepath=output_file,
    use_selection=True,
    use_materials=False,
    use_triangles=True,
    use_normals=True,
    use_uvs=False
)

print("Optimization complete!")
print(f"Original: {input_file}")
print(f"Optimized: {output_file}")
