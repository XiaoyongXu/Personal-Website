import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { useTheme } from "../../hooks/useTheme";

function StarField(props) {
  const ref = useRef();
  
  // Generate points in a sphere
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  useFrame((state, delta) => {
    // Rotate the entire group slowly
    ref.current.rotation.x -= delta / 15;
    ref.current.rotation.y -= delta / 20;
  });
  
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color={props.color}
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
}

export const Background3D = () => {
  const { theme } = useTheme();
  // Violet/Blue for Dark mode, Slate/Gray for Light mode
  const starColor = theme === 'dark' ? '#818cf8' : '#64748b'; 
  const bgColor = theme === 'dark' ? '#030712' : '#fcfcfd';

  return (
    <div className="fixed inset-0 -z-50 h-full w-full transition-colors duration-500" style={{ backgroundColor: bgColor }}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarField color={starColor} />
      </Canvas>
      {/* Overlay gradient for better text readability */}
      <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'dark' ? 'from-bg via-transparent to-bg' : 'from-white via-transparent to-white'} opacity-80`} />
    </div>
  );
};
