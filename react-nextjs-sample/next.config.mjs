/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      SERVER_URL: process.env.SERVER_URL,
      DASHBOARD_ID: process.env.DASHBOARD_ID
    }
  };

export default nextConfig;