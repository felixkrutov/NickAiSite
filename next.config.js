/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // <‑‑ говорит Next сделать статический export
  images: { unoptimized: true } // чтобы оптимизатор картинок не ругался
};

module.exports = nextConfig;
