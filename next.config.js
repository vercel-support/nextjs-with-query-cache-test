module.exports = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:slug*',
          destination: '/[...slug]',
          has: [{ type: 'query', key: 'fbclid' }],
        },
      ]
    }
  },
}