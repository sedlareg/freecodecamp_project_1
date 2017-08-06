import React from 'react'
import { Layout, Post, Title } from '../components'
import { logPageView } from '../utils/analytics'
import 'isomorphic-fetch'

export default class extends React.Component {
  static async getInitialProps () {
    const apiUrl = 'https://www.mooneye.de/wordpress/wp-json/wp/v2/'
    const params = 'posts'
    const res = await fetch(apiUrl + params)
    const data = await res.json()

    return { data }
  }

  componentDidMount () {
    logPageView()
  }

  render () {
    return (
      <Layout title='News' description='all news' headerType='interior'>
        <main id='news'>
          <Title title='News' imgPath='/static/new/news-title.jpg' />
          <div className='container'>
            <div className='section'>
              {this.props.data.map(function (post) {
                return (
                  <Post
                    key={post.id}
                    slug={post.slug}
                    title={post.title}
                    content={post.content}
                    excerpt={post.excerpt}
                    categories={post.categories}
                    tags={post.tags}
                    date={new Date(post.date)}
                  />
                )
              })}
            </div>
          </div>
        </main>
      </Layout>
    )
  }
}
