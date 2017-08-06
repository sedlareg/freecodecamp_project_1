// next.config.js
module.exports = {
  distDir: 'build',
  exportPathMap () {
    return {
      '/': { page: '/index' },
      '/about': { page: '/about' },
      '/blog': { page: '/blog' },
      '/links': { page: '/links' },
      '/reboot': { page: '/reboot' },
      '/recipes': { page: '/recipes' },
      '/roadmap': { page: '/roadmap' }
    }
  }
}
