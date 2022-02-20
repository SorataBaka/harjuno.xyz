module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['upload.wikimedia.org', "railway.app"],
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false, os:false };

    return config;
  },

}
