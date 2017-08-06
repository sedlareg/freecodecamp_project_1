import React from 'react'
import { Layout, Title } from '../components'
import { logPageView } from '../utils/analytics'

export default class Recipes extends React.Component {
  componentDidMount () {
    logPageView()
  }

  render () {
    return (
      <Layout title='Recipes' description='all recipes' headerType='interior'>
        <main id='recipes'>
          <Title title='Recipes' imgPath='/static/new/recipes-title.jpg' />
          <div className='container'>
            <div className='section'>Recipes</div>
          </div>
        </main>
      </Layout>
    )
  }
}
