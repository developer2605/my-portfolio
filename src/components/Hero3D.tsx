import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Component chứa vật thể 3D và logic chuyển động
const AnimatedDataShape = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  // useFrame chạy mỗi khung hình (khoảng 60fps), giúp vật thể tự động xoay
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    // Sphere args: [Bán kính, số phân đoạn X, số phân đoạn Y]
    <Sphere ref={meshRef} args={[1.5, 64, 64]} scale={1.2}>
      <MeshDistortMaterial
            color="#00c0ff" // Đổi mã màu HEX (ví dụ: #10b981 là Xanh Emerald ngầu như Matrix, hoặc #3b82f6 là Xanh dương)
            attach="material"
            distort={0.6}   // Tăng từ 0.4 lên 0.6 để khối 3D biến dạng mạnh hơn, gai góc hơn
            speed={3}       // Tăng tốc độ lượn sóng (ví dụ: 3 hoặc 4)
            roughness={0.1} // Giảm xuống 0.1 để bề mặt bóng bẩy hơn
            metalness={0.9} // Tăng lên 0.9 để nhìn giống kim loại hơn
        />
    </Sphere>
  );
};

// Component chính để render Canvas 3D
export default function Hero3D() {
  return (
    // Container phải có chiều cao/rộng cố định hoặc relative để Canvas lấp đầy
    <div className="h-[500px] w-full cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 5] }}>
        {/* Ánh sáng môi trường và ánh sáng định hướng để tạo khối */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 5]} intensity={1.5} />
        
        {/* Vật thể 3D */}
        <AnimatedDataShape />
        
        {/* Cho phép người dùng dùng chuột xoay vật thể (tắt zoom để không lỗi cuộn trang) */}
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}