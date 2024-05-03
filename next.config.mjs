/** @type {import('next').NextConfig} */
const nextConfig = {
    // Add your existing Next.js configuration here
  
    // Custom build command to include prisma generate
    buildCommand: "npm run build && prisma generate",
  
    // Prisma configuration
    prisma: {
      generate: {
        commands: 'prisma generate',
      },
    },
  };
  
  export default nextConfig;