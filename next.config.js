module.exports = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/news/:slug*',
          destination: '/news/:slug*?fbclid',
          has: [{ type: 'query', key: 'fbclid' }],
        },
      ]
    }
  },
}