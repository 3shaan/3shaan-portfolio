/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental:{
    appDir:true,
  },
  images:{
    domains:['i.imgur.com','img.freepik.com','i.ibb.co']
  }
}

// module.exports = nextConfig
module.exports = nextConfig;
