// next.config.js
const fetch = require('isomorphic-fetch')
const getPages = require('static-reducer')

module.exports = {
  distDir: 'build',
  async exportPathMap () {
    const apiUrl = 'https://www.mooneye.de/wordpress/wp-json/wp/v2/'
    const params = 'posts?categories='

    const blogRes = await fetch(apiUrl.concat(params + '2'))
    const blogList = await blogRes.json()
    const blogPages = getPages(blogList, '/blog', '/single-post')

    const recipeRes = await fetch(apiUrl.concat(params + '3'))
    const recipeList = await recipeRes.json()
    const recipePages = getPages(recipeList, '/recipes', '/single-recipe')

    return Object.assign({}, blogPages, recipePages, {
      '/': { page: '/index' },
      '/about': { page: '/about' },
      '/blog': { page: '/blog' },
      '/links': { page: '/links' },
      '/reboot': { page: '/reboot' },
      '/recipes': { page: '/recipes' },
      '/roadmap': { page: '/roadmap' }
    })
  }
}
