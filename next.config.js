module.exports = {
  async redirects() {
    return [
      {
        source: '/movies',
        destination: '/',
        permanent: true,
      },
    ]
  },
}
