import React from 'react'
import { Layout, Title } from '../components'
import { logPageView } from '../utils/analytics'

export default class extends React.Component {
  componentDidMount () {
    logPageView()
  }

  render () {
    return (
      <Layout title='Events' description='all events' headerType='interior'>
        <main id='events'>
          <Title title='Events' imgPath='/static/new/events-title.jpg' />
          <div style={{ height: '700px' }}>Events</div>
        </main>
      </Layout>
    )
  }
}
