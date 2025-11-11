#!/usr/bin/env python3
"""
Convert OBJ to optimized GLB format
GLB is much more efficient for web delivery

Usage: blender --background --python convert-to-glb.py
"""

import bpy

# Clear default scene
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete()

# Import OBJ
input_file = "public/molandak.obj"
output_file = "public/molandak.glb"

print(f"Importing {input_file}...")
bpy.ops.import_scene.obj(filepath=input_file)

# Get the imported object
obj = bpy.context.selected_objects[0]
bpy.context.view_layer.objects.active = obj

print(f"Original vertices: {len(obj.data.vertices)}")
print(f"Original polygons: {len(obj.data.polygons)}")

# Optional: Add Decimate modifier
print("Applying decimate modifier...")
decimate = obj.modifiers.new(name="Decimate", type='DECIMATE')
decimate.ratio = 0.15  # Reduce to 15% (adjust for quality vs size)
bpy.ops.object.modifier_apply(modifier="Decimate")

print(f"Optimized vertices: {len(obj.data.vertices)}")
print(f"Optimized polygons: {len(obj.data.polygons)}")

# Export as GLB
print(f"Exporting to {output_file}...")
bpy.ops.export_scene.gltf(
    filepath=output_file,
    export_format='GLB',
    use_selection=True,
    export_materials='NONE',
    export_colors=False,
    export_normals=True,
    export_draco_mesh_compression_enable=True,
    export_draco_mesh_compression_level=6
)

print("Conversion complete!")
print(f"You can now use GLTFLoader instead of OBJLoader in your React component")
