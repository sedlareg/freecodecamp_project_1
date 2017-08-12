import React from 'react'
import PropTypes from 'prop-types'

export default class Page extends React.Component {
  static propTypes = {
    title: PropTypes.object,
    content: PropTypes.object
  }

  render () {
    const { title, content } = this.props

    return (
      <div className='row' key={this.props.i}>
        <div className='col s12'>
          <h3 style={{ marginBottom: '0', color: '#284980' }}>
            {title.rendered}
          </h3>
          <div
            className='flow-text'
            dangerouslySetInnerHTML={{
              __html: content.rendered
            }}
          />
        </div>
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
