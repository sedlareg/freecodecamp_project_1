import React from 'react'
import { Layout, Title } from '../components'
import { logPageView } from '../utils/analytics'

export default class Reboot extends React.Component {
  componentDidMount () {
    logPageView()
  }

  render () {
    return (
      <Layout
        title='Reboot'
        description='how does it work'
        headerType='interior'
      >
        <main id='reboot'>
          <Title title='Reboot' imgPath='/static/new/reboot-title.jpg' />
          <div className='container'>
            <div className='section'>Reboot</div>
          </div>
        </main>
      </Layout>
    )
  }
}
