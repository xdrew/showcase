import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Monad Ecosystem - Neural Network Explorer",
  description: "Explore the Monad blockchain ecosystem through an interactive 3D neural network visualization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
