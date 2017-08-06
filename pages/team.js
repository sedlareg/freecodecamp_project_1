import React from 'react'
import { Layout, Title } from '../components'
import { logPageView } from '../utils/analytics'

export default class extends React.Component {
  componentDidMount () {
    logPageView()
  }

  render () {
    return (
      <Layout title='Team' description='all teams' headerType='interior'>
        <main id='team'>
          <Title title='Team' imgPath='/static/new/team-title.jpg' />
          <div style={{ height: '700px' }}>Team</div>
        </main>
      </Layout>
    )
  }
}
