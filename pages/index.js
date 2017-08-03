import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { logPageView } from '../utils/analytics'
import 'isomorphic-fetch'

export default class extends React.Component {
  static async getInitialProps () {
    const apiUrl = 'https://wp.catechetics.com/wp-json/wp/v2/'
    const params =
      'multiple-post-type?per_page=100&type[]=post&type[]=page&type[]=formation-card'
    const res = await fetch(apiUrl + params)
    const data = await res.json()
    return { data }
  }

  componentDidMount () {
    // initTabs();
    logPageView()
  }

  render () {
    return (
      <Layout
        title='Catechetical Institute - Franciscan University'
        description='The Franciscan University Catechetical Institute forms Catholics who form others in the faith. Through courses, conferences, advice, and resources, the institute supports clergy, parents, and all those responsible for the work of catechesis and evangelization, as they carry out Christ’s command to make disciples of all nations.'
      />
    )
  }
}
