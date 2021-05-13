module.exports = {
  async redirects() {
    return {
      beforeFiles: [
        {
          source: '/news/:slug*',
          destination: '/news/:slug*',
          has: [{ type: 'query', key: 'fbclid' }],
        },
      ]
    }
  },
}