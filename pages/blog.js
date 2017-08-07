import React from 'react'
import { Layout, Post, Title } from '../components'
import { logPageView } from '../utils/analytics'
import 'isomorphic-fetch'
import PropTypes from 'prop-types'

export default class Blog extends React.Component {
  static propTypes = {
    posts: PropTypes.object
  }

  static async getInitialProps () {
    const apiUrl = 'https://www.mooneye.de/wordpress/wp-json/wp/v2/'
    const params = 'posts?categories=2'
    const res = await fetch(apiUrl.concat(params))
    const posts = await res.json()

    return { posts }
  }

  componentDidMount () {
    logPageView()
  }

  render () {
    const { posts } = this.props

    return (
      <Layout title='Blog' description='my daily blog' headerType='interior'>
        <main id='blog'>
          <Title title='Blog' imgPath='/static/new/blog-title.jpg' />
          <div className='container'>
            <div className='section'>
              {posts.map(function (post) {
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
