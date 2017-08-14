import React from 'react'
import { ExpandingSection, Layout, StaticPage } from '../components'
import 'isomorphic-fetch'
import PropTypes from 'prop-types'

export default class Reboot extends React.Component {
  static propTypes = {
    pages: PropTypes.array
  }

  static async getInitialProps () {
    const apiUrl = 'https://www.mooneye.de/wordpress/wp-json/wp/v2/'
    const params =
      'multiple-post-type?per_page=100&type[]=post&categories[]=9&filter[orderby]=id&order=asc'
    const res = await fetch(apiUrl.concat(params))
    const pages = await res.json()

    return { pages }
  }

  render () {
    const { pages } = this.props

    return (
      <Layout
        title='Reboot'
        description='how does it work'
        headerType='interior'
      >
        <StaticPage
          title='Reboot'
          mainId='reboot'
          imgPath='/static/new/reboot-title.jpg'
        >
          <div className='section valign-wrapper black-text white-background-flourish'>
            <div className='container wide-container'>
              <h2 className='light left' style={{ marginBottom: '0px' }}>
                Reboot
              </h2>
              <br />
              <br />
              <br />
              <br />
              {pages
                .filter(page => page.format === 'aside')
                .map((page, i) =>
                  <ExpandingSection
                    index={i}
                    expanded={i === 0}
                    title={page.title.rendered}
                    content={page.content.rendered}
                    key={page.id}
                  />
                )}
            </div>
          </div>
        </StaticPage>
      </Layout>
    )
  }
}
