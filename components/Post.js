import React from 'react'
import PropTypes from 'prop-types'

export default class Post extends React.Component {
  static propTypes = {
    slug: PropTypes.string,
    title: PropTypes.object,
    content: PropTypes.object,
    excerpt: PropTypes.object,
    categories: PropTypes.array,
    tags: PropTypes.array,
    date: PropTypes.object
  }

  render () {
    const { slug, title, content, excerpt, date } = this.props

    return (
      <div className='row' key={this.props.i}>
        <div className='col s12'>
          <a href={`/blog/${slug}`}>
            <h3 style={{ marginBottom: '0', color: '#284980' }}>
              {title.rendered}
            </h3>
          </a>
          <span
          >{`${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`}</span>
          <div
            className='flow-text'
            dangerouslySetInnerHTML={{
              __html: excerpt.rendered
            }}
          />
        </div>
        {excerpt.rendered.length < content.rendered.length &&
          <a href={`/blog/${slug}`}>
            <span className='more-link'>&gt;&gt; Zum Beitrag</span>
          </a>}
        <style jsx>
          {`
            span {
              color: #31c2ae;
              padding-left: 6px;
              margin-bottom: 8px;
              display: block;
            }
            span.more-link {
              padding-left: 16px;
            }
          `}
        </style>
      </div>
    )
  }
}
