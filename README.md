# Monad Ecosystem - Neural Network Explorer

An immersive 3D visualization of the Monad blockchain ecosystem, presenting projects as interconnected neurons in a living neural network.

## 🧬 Concept

This website visualizes the Monad ecosystem as a biological neural network, where:
- **Projects** are represented as bioluminescent neurons
- **Categories** form distinct neural clusters in 3D space
- **Connections** are synaptic links pulsing with energy
- **Interactions** create organic, breathing animations

## ✨ Features

### 🎯 Interactive 3D Visualization
- **Neural Network**: 100+ projects displayed as glowing neurons
- **Category Clustering**: Projects organized by type (DeFi, AI, Gaming, NFTs, Infrastructure, DePIN, Consumer)
- **Organic Connections**: Curved synaptic links between related projects
- **Smooth Controls**: Orbital camera with auto-rotation and manual control

### 🎨 Bio-Organic Design
- **Bioluminescent Colors**: Each category has a unique glow color
- **Breathing Animation**: Neurons pulse and breathe with life
- **Glass Morphism**: Modern UI with blur and transparency
- **Particle Effects**: Energy flows through connections
- **Post-Processing**: Bloom effects for ethereal glow

### 🔍 Discovery Tools
- **Category Filter**: Focus on specific ecosystem sectors
- **Search**: Find projects by name or description
- **Hover Details**: Quick project info on mouse over
- **Detail Panel**: Full project information with links

### 📊 Project Data
- **100+ Projects** across the Monad ecosystem
- **7 Categories**: AI, DeFi, Gaming, Infrastructure, NFTs, DePIN, Consumer
- **Contract Counts**: Visual size based on deployment scale
- **Descriptions**: Detailed information for each project

## 🛠️ Technology Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Three.js** - 3D graphics engine
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers and abstractions
- **Framer Motion** - Smooth UI animations
- **Tailwind CSS** - Utility-first styling
- **Zustand** - Lightweight state management

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

\`\`\`bash
# Install dependencies
npm install

# If you encounter peer dependency warnings (they're safe to ignore)
# Or use: npm install --legacy-peer-deps
\`\`\`

### Development

\`\`\`bash
# Start development server
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to explore the neural network.

### Production Build

\`\`\`bash
# Build for production
npm run build

# Start production server
npm start
\`\`\`

## 🎮 Controls

- **Left Click + Drag**: Rotate camera around the network
- **Right Click + Drag**: Pan camera
- **Scroll**: Zoom in/out
- **Click Neuron**: View project details
- **Hover Neuron**: Quick preview
- **Auto-Rotate**: Automatic gentle rotation (can be disabled by interacting)

## 🎨 Category Colors

- **AI** - Electric Blue (#00d4ff)
- **DeFi** - Amber Gold (#ffa500)
- **Gaming** - Magenta Pink (#ff1493)
- **Infrastructure** - Teal Aqua (#00ffd0)
- **NFTs** - Lime Green (#7fff00)
- **DePIN** - Purple Violet (#9370db)
- **Consumer** - Coral Red (#ff6b6b)

## 📁 Project Structure

\`\`\`
/app                  # Next.js app directory
  /page.tsx          # Main page component
  /layout.tsx        # Root layout
  /globals.css       # Global styles
/components          # React components
  /Neuron.tsx        # Individual project node
  /Connection.tsx    # Synaptic connections
  /NeuralNetwork.tsx # Main 3D network
  /Scene.tsx         # Three.js scene setup
  /Sidebar.tsx       # Category filters
  /ProjectPanel.tsx  # Project details panel
  /SearchBar.tsx     # Search interface
/data                # Project data
  /projects.ts       # Monad ecosystem projects
/lib                 # Utilities
  /store.ts          # Zustand state management
\`\`\`

## 🌟 Key Components

### Neuron Component
Each project is rendered as an interactive 3D sphere with:
- Pulsing glow effects
- Hover interactions
- Click to expand
- Size based on contract count
- Category-specific coloring

### Neural Network
Positions projects in 3D space:
- Spherical clustering by category
- Organic spacing with randomization
- Automatic connection generation
- Dynamic filtering support

### Scene
Three.js environment with:
- Orbital controls
- Starfield background
- Atmospheric fog
- Post-processing bloom
- Responsive lighting

## 📊 Data Source

Project data sourced from the official Monad ecosystem registry:
[github.com/monad-crypto/protocols](https://github.com/monad-crypto/protocols)

## 🎯 Performance

- **Optimized Rendering**: Instanced meshes where possible
- **LOD Ready**: Structure supports level-of-detail
- **Efficient Updates**: Zustand for minimal re-renders
- **Dynamic Loading**: Scene loads asynchronously
- **Responsive**: Adapts to different screen sizes

## 🔮 Future Enhancements

- [ ] VR/AR support for immersive exploration
- [ ] Real-time data integration
- [ ] Project relationship mapping
- [ ] Activity visualization (transaction volume, TVL)
- [ ] Timeline view showing ecosystem growth
- [ ] Mobile-optimized 3D experience
- [ ] Social sharing with custom camera angles

## 📝 License

This project is created for the Monad ecosystem community.

## 🤝 Contributing

Contributions are welcome! To add or update projects:
1. Edit `/data/projects.ts`
2. Follow the existing data structure
3. Submit a pull request

---

**Built with ❤️ for the Monad community**
