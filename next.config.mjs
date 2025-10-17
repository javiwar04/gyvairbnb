/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 🔥 importante para Azure Static Web Apps
  images: {
    unoptimized: true, // evita errores con el sistema de imágenes de Next
  },
};

export default nextConfig;
