import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Stars } from '@react-three/drei';
import { useRef } from 'react';

function MeteoriteModel({ color }) {
  const ref = useRef();

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.45;
    ref.current.rotation.y += delta * 0.75;
    ref.current.rotation.z += delta * 0.2;
  });

  return (
    <Float speed={2.3} rotationIntensity={1.4} floatIntensity={1.2}>
      <mesh ref={ref} castShadow receiveShadow>
        <icosahedronGeometry args={[1.7, 2]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          roughness={0.75}
          metalness={0.85}
        />
      </mesh>
    </Float>
  );
}

export default function SpaceScene({ color = '#7dd3fc' }) {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 42 }}>
      <color attach="background" args={['#030712']} />
      <fog attach="fog" args={['#030712', 6, 16]} />
      <ambientLight intensity={1.2} />
      <directionalLight position={[4, 2, 5]} intensity={1.7} color="#cfe8ff" />
      <pointLight position={[-2, -2, 3]} intensity={20} color={color} />
      <Stars radius={70} depth={30} count={4000} factor={4} saturation={0} fade speed={1.2} />
      <MeteoriteModel color={color} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.2, 0]}>
        <circleGeometry args={[3.4, 80]} />
        <meshBasicMaterial color="#0f172a" transparent opacity={0.7} />
      </mesh>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.2} />
    </Canvas>
  );
}
