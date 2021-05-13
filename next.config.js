module.exports = {
  async rewrites() {
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