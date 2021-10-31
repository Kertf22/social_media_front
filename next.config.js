module.exports = {
    webpack5: true,
    webpack: (config) => {
      config.resolve.fallback = { fs: false };
  
      return config;
    },
    images: {
      domains: ['ufs-project.s3.amazonaws.com'],
    },
  };