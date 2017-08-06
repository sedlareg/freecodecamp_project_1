import React from 'react'
import { Layout, Title } from '../components'
import { logPageView } from '../utils/analytics'

export default class Roadmap extends React.Component {
  componentDidMount () {
    logPageView()
  }

  render () {
    return (
      <Layout
        title='Roadmap'
        description='all days to go'
        headerType='interior'
      >
        <main id='roadmap'>
          <Title title='Roadmap' imgPath='/static/new/roadmap-title.jpg' />
          <div className='container'>
            <div className='section'>Roadmap</div>
          </div>
        </main>
      </Layout>
    )
  }
}
