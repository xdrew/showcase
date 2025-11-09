'use client';

import React, { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Canvas Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="w-full h-screen flex items-center justify-center bg-[#0a0a0f]">
            <div className="glass-strong organic px-8 py-6 max-w-md">
              <div className="text-red-400 text-xl mb-4">⚠️ 3D Rendering Error</div>
              <p className="text-gray-300 mb-4">
                Failed to initialize the 3D neural network. This may be due to:
              </p>
              <ul className="text-sm text-gray-400 list-disc list-inside space-y-2">
                <li>Browser WebGL support issues</li>
                <li>Graphics driver compatibility</li>
                <li>Hardware acceleration disabled</li>
              </ul>
              <button
                onClick={() => window.location.reload()}
                className="mt-6 glass organic px-6 py-2 hover:glass-strong transition-all w-full"
              >
                Reload Page
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
