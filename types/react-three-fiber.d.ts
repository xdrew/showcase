import '@react-three/fiber';

declare module '@react-three/fiber' {
  interface ThreeElements {
    // Suppress TypeScript errors for React Three Fiber intrinsic elements
    [key: string]: any;
  }
}
