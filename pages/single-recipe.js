import React from 'react'
import { Layout, Error404 } from '../components'
import 'isomorphic-fetch'
import { logPageView } from '../utils/analytics'

export default class SingleRecipe extends React.Component {
  static async getInitialProps ({ query: { id } }) {
    const apiUrl = 'https://www.mooneye.de/wordpress/wp-json/wp/v2/'
    const params = `posts?slug=${id}`
    const res = await fetch(apiUrl + params)
    const data = await res.json()
    return { data }
  }

  componentDidMount () {
    logPageView()
  }

  titleTag (props) {
    if (this.props.data.length > 0) {
      return `${this.props.data[0].title.rendered} | Recipes`
    }
    return `404 | Recipes`
  }

  descriptionTag (props) {
    // if (this.props.data.length > 0) {
    //   return `${this.props.data[0].acf.seo_description}`
    // }
    return ` `
  }

  render () {
    return (
      <Layout
        headerType='interior'
        title={this.titleTag()}
        description={this.descriptionTag()}
      >
        {this.props.data.length === 0
          ? <Error404 />
          : <main className='single-post'>
            <div className='container'>
              <h1
                dangerouslySetInnerHTML={{
                  __html: this.props.data[0].title.rendered
                }}
                />
              <div className='row'>
                <div
                  className='col s12 flow-text'
                  dangerouslySetInnerHTML={{
                    __html: this.props.data[0].content.rendered
                  }}
                  />
              </div>
            </div>
          </main>}
      </Layout>
    )
  }
}
