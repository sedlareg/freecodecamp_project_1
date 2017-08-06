import React from 'react'
import { Layout, Title } from '../components'
import { logPageView } from '../utils/analytics'

export default class About extends React.Component {
  componentDidMount () {
    logPageView()
  }

  render () {
    return (
      <Layout title='About' description='all about me' headerType='interior'>
        <main id='about'>
          <Title title='About' imgPath='/static/new/about-title.jpg' />
          <div className='container'>
            <div className='section'>All about me</div>
          </div>
        </main>
      </Layout>
    )
  }
}
