/** @format */

import logo from "./logo.svg";
import "./App.css";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import gsap from "gsap";
function App() {
  return (
    <Canvas>
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Box />
    </Canvas>
  );
}

const Box = () => {
  const meshRef = useRef(null);
  const [color, setcolor] = useState("red");
  const [scale, setscale] = useState(1);
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta;
    meshRef.current.rotation.y += delta;
  });

  return (
    <mesh
      ref={meshRef}
      scale={scale}
      onClick={() => {
        setcolor(color === "red" ? "blue" : "red");

        gsap.to(meshRef.current.position, {
          x: 2,
        });
      }}
    >
      <boxGeometry></boxGeometry>
      <meshPhongMaterial args={[{ color: color }]}></meshPhongMaterial>
    </mesh>
  );
};
export default App;
