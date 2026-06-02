import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "../hooks/useTheme";

function generateParticleData(count, isDark) {
  const pos = new Float32Array(count * 3);
  const col = new Float32Array(count * 3);
  const accent = isDark
    ? { r: 139 / 255, g: 131 / 255, b: 1 }
    : { r: 108 / 255, g: 99 / 255, b: 1 };
  for (let i = 0; i < count; i++) {
    const r = 12 + Math.random() * 8;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    pos[i * 3 + 2] = r * Math.cos(phi) - 6;
    const t = Math.random();
    col[i * 3] = accent.r * (0.4 + t * 0.6);
    col[i * 3 + 1] = accent.g * (0.4 + t * 0.6);
    col[i * 3 + 2] = accent.b * (0.4 + t * 0.6);
  }
  return { positions: pos, colors: col };
}

function Particles({ count = 200 }) {
  const mesh = useRef();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const { positions, colors } = useMemo(
    () => generateParticleData(count, isDark),
    [count, isDark],
  );

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.y = clock.getElapsedTime() * 0.015;
      mesh.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.01) * 0.1;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function Shapes() {
  const { theme } = useTheme();
  const groupRef = useRef();

  const isDark = theme === "dark";

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.08) * 0.15;
      groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.05) * 0.1;
    }
  });

  const shapes = useMemo(
    () => [
      { pos: [-4, 3, -4], color: isDark ? "#8b83ff" : "#6c63ff", scale: 1.4, speed: 1.2 },
      { pos: [5, -2, -6], color: isDark ? "#ff85a1" : "#ff6584", scale: 1.0, speed: 0.8 },
      { pos: [-3, -4, -5], color: isDark ? "#60a5fa" : "#3b82f6", scale: 0.8, speed: 1.5 },
      { pos: [4, 4, -7], color: isDark ? "#a78bfa" : "#7c3aed", scale: 1.2, speed: 1.0 },
      { pos: [-5, 0, -8], color: isDark ? "#34d399" : "#10b981", scale: 0.6, speed: 1.8 },
    ],
    [isDark],
  );

  return (
    <group ref={groupRef}>
      {shapes.map((s, i) => (
        <Float key={i} speed={s.speed} rotationIntensity={0.6} floatIntensity={0.8}>
          <mesh position={s.pos}>
            {i % 3 === 0 ? (
              <icosahedronGeometry args={[s.scale, 1]} />
            ) : i % 3 === 1 ? (
              <octahedronGeometry args={[s.scale, 0]} />
            ) : (
              <dodecahedronGeometry args={[s.scale, 0]} />
            )}
            <MeshDistortMaterial
              color={s.color}
              roughness={0.3}
              metalness={0.8}
              distort={0.25}
              speed={2}
              transparent
              opacity={0.35}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export default function ThreeBackground() {
  return (
    <div className="three-bg">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <Shapes />
        <Particles count={250} />
      </Canvas>
    </div>
  );
}
