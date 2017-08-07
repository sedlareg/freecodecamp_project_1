import React from 'react'
import { Layout, Recipe, Title } from '../components'
import { logPageView } from '../utils/analytics'
import 'isomorphic-fetch'
import PropTypes from 'prop-types'

export default class Recipes extends React.Component {
  static propTypes = {
    recipes: PropTypes.object
  }

  static async getInitialProps () {
    const apiUrl = 'https://www.mooneye.de/wordpress/wp-json/wp/v2/'
    const params = 'posts?categories=3'
    const res = await fetch(apiUrl.concat(params))
    const recipes = await res.json()

    return { recipes }
  }

  componentDidMount () {
    logPageView()
  }

  render () {
    const { recipes } = this.props

    return (
      <Layout title='Recipes' description='all recipes' headerType='interior'>
        <main id='recipes'>
          <Title title='Recipes' imgPath='/static/new/recipes-title.jpg' />
          <div className='container'>
            <div className='section'>
              {recipes.map(function (recipe) {
                return (
                  <Recipe
                    key={recipe.id}
                    slug={recipe.slug}
                    title={recipe.title}
                    content={recipe.content}
                    excerpt={recipe.excerpt}
                    categories={recipe.categories}
                    tags={recipe.tags}
                    date={new Date(recipe.date)}
                  />
                )
              })}
            </div>
          </div>
        </main>
      </Layout>
    )
  }
}
