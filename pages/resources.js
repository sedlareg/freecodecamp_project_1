import React from 'react'
import { Layout, Title } from '../components'
import { logPageView } from '../utils/analytics'

export default class extends React.Component {
  componentDidMount () {
    logPageView()
  }

  render () {
    return (
      <Layout
        title='Resources'
        description='all resources'
        headerType='interior'
      >
        <main id='resources'>
          <Title title='Resources' imgPath='/static/new/resources-title.jpg' />
          <div style={{ height: '700px' }}>Resources</div>
        </main>
      </Layout>
    )
  }
}
