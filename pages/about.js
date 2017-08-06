import React from 'react'
import { Layout, Title } from '../components'
import { logPageView } from '../utils/analytics'

export default class extends React.Component {
  componentDidMount () {
    logPageView()
  }

  render () {
    return (
      <Layout title='About' description='all about us' headerType='interior'>
        <main id='about'>
          <Title title='About' imgPath='/static/new/about-title.jpg' />
        </main>
      </Layout>
    )
  }
}
