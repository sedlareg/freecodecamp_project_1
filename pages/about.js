import React from 'react'
import { Layout, StaticPage } from '../components'
import 'isomorphic-fetch'
import PropTypes from 'prop-types'

export default class About extends React.Component {
  static propTypes = {
    pages: PropTypes.array
  }

  static async getInitialProps () {
    const apiUrl = 'https://www.mooneye.de/wordpress/wp-json/wp/v2/'
    const params = 'multiple-post-type?per_page=100&search=about&type[]=page'
    const res = await fetch(apiUrl.concat(params))
    const pages = await res.json()

    return { pages }
  }

  render () {
    const { pages } = this.props

    return (
      <Layout title='About' description='all about me' headerType='interior'>
        <StaticPage
          title='About'
          mainId='about'
          imgPath='/static/new/about-title.jpg'
        >
          <div className='section white-background-flourish'>
            <div className='container'>
              <div className='row valign-wrapper'>
                {pages
                  .filter(page => page.slug === 'about-me-intro')
                  .map(page =>
                    <div
                      key={page.id}
                      className='col s12 valign flow-text'
                      dangerouslySetInnerHTML={{
                        __html: page.content.rendered
                      }}
                    />
                  )}
              </div>
            </div>
          </div>
          <div className='section red-background-flourish white-text'>
            <div className='container wide-container'>
              <div className='row valign-wrapper'>
                {pages
                  .filter(page => page.slug === 'about-me-intro-2')
                  .map(page =>
                    <div
                      className='col s12 flow-text'
                      dangerouslySetInnerHTML={{
                        __html: page.content.rendered
                      }}
                    />
                  )}
              </div>
            </div>
          </div>
          <div
            className='section banner white-text'
            style={{ backgroundColor: '#000', marginBottom: '50px' }}
          >
            <div className='container wide-container'>
              <div className='row valign-wrapper'>
                <div className='col s12 m8 valign order-2'>
                  {pages.filter(page => page.slug === 'about-me').map(page =>
                    <blockquote
                      className='flow-text'
                      style={{ borderLeft: '5px solid #A6CC40' }}
                      dangerouslySetInnerHTML={{
                        __html: page.content.rendered
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className='section white-background-flourish banner'>
            <div className='container wide-container'>
              <div className='row'>
                <div className='col s12 left'>
                  {pages
                    .filter(page => page.slug === 'about-me-quote')
                    .map(page =>
                      <blockquote
                        className='flow-text'
                        style={{ borderLeft: '5px solid #A6CC40' }}
                        dangerouslySetInnerHTML={{
                          __html: page.content.rendered
                        }}
                      />
                    )}
                </div>
              </div>
            </div>
          </div>
        </StaticPage>
      </Layout>
    )
  }
}
