import React from 'react'
import { Layout, Title } from '../components'
import { logPageView } from '../utils/analytics'

export default class extends React.Component {
  componentDidMount () {
    logPageView()
  }

  render () {
    return (
      <Layout title='Courses' description='all Courses' headerType='interior'>
        <main id='courses'>
          <Title title='Courses' imgPath='/static/new/courses-title.jpg' />
          <div style={{ height: '700px' }}>Courses</div>
        </main>
      </Layout>
    )
  }
}
