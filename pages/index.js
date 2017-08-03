import React from 'react'
import { Layout, Hero, StickyNav, TeamCard } from '../components'
import { logPageView } from '../utils/analytics'
import 'isomorphic-fetch'

export default class extends React.Component {
  componentDidMount () {
    // initTabs();
    logPageView()
  }

  render () {
    return (
      <Layout title='Project 1' description='testdescription'>
        <main>
          <Hero />
          <StickyNav />
          <TeamCard />
        </main>
      </Layout>
    )
  }
}
