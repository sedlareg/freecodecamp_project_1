import React from 'react'
import { Layout, StaticPage } from '../components'
import 'isomorphic-fetch'
import PropTypes from 'prop-types'

export default class Imprint extends React.Component {
  static propTypes = {
    page: PropTypes.array
  }

  static async getInitialProps () {
    const apiUrl = 'https://www.mooneye.de/wordpress/wp-json/wp/v2/'
    const params = 'pages?slug=imprint'
    const res = await fetch(apiUrl.concat(params))
    const page = await res.json()

    return { page }
  }

  render () {
    const { page } = this.props

    return (
      <Layout title='Impressum' description='Impressum' headerType='interior'>
        <StaticPage page={page} mainId='imprint' />
      </Layout>
    )
  }
}
