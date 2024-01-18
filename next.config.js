/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.microcms-assets.io',
      'lh3.googleusercontent.com',
      'avatars.githubusercontent.com'
    ]
  }
}

module.exports = nextConfig
