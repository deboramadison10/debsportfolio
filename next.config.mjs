// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   basePath: process.env.NODE_ENV === 'production' ? '/debsportfolio' : '',
//   images: { unoptimized: true,
//   },
// }

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/debsportfolio' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/debsportfolio' : '',
  },
  images: { unoptimized: true },
}

export default nextConfig