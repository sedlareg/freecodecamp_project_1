import React from 'react'
import { Layout, Title } from '../components'
import { logPageView } from '../utils/analytics'

export default class Links extends React.Component {
  componentDidMount () {
    logPageView()
  }

  render () {
    return (
      <Layout title='Links' description='all links' headerType='interior'>
        <main id='links'>
          <Title title='Links' imgPath='/static/new/links-title.jpg' />
          <div className='container'>
            <div className='section'>Links</div>
          </div>
        </main>
      </Layout>
    )
  }
}
