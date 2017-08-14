import React from 'react'
import { Layout, Page, StaticPage } from '../components'
import 'isomorphic-fetch'
import PropTypes from 'prop-types'

export default class Roadmap extends React.Component {
  static propTypes = {
    page: PropTypes.array
  }

  static async getInitialProps () {
    const apiUrl = 'https://www.mooneye.de/wordpress/wp-json/wp/v2/'
    const params = 'pages?slug=roadmap'
    const res = await fetch(apiUrl.concat(params))
    const page = await res.json()

    return { page }
  }

  render () {
    const { page } = this.props

    return (
      <Layout
        title='Roadmap'
        description='all days to go'
        headerType='interior'
      >
        <StaticPage
          title='Roadmap'
          mainId='roadmap'
          imgPath='/static/new/roadmap-title.jpg'
        >
          <div className='container'>
            <div className='section'>
              {page.map(function (element) {
                return (
                  <Page
                    key={element.id}
                    title={element.title}
                    content={element.content}
                    date={new Date(element.date)}
                  />
                )
              })}
            </div>
          </div>
        </StaticPage>
      </Layout>
    )
  }
}
