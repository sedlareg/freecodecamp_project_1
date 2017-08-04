import React from 'react'
import { Layout, Section, TeamCard } from '../components'
import { logPageView } from '../utils/analytics'
import 'isomorphic-fetch'

export default class extends React.Component {
  componentDidMount () {
    // initTabs();
    logPageView()
  }

  render () {
    return (
      <Layout title='Home' description='startpage' hero='show'>
        <main>
          <Section />
          <TeamCard />
        </main>
      </Layout>
    )
  }
}
