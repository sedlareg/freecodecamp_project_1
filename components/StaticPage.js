import React from 'react'
import { Page, Title } from '../components'
import { logPageView } from '../utils/analytics'
import PropTypes from 'prop-types'

export default class StaticPage extends React.Component {
  static propTypes = {
    page: PropTypes.array,
    title: PropTypes.string,
    mainId: PropTypes.string,
    imgPath: PropTypes.string
  }

  componentDidMount () {
    logPageView()
  }

  render () {
    const { page, title, mainId, imgPath } = this.props

    return (
      <main id={mainId}>
        {title && <Title title={title} imgPath={imgPath} />}
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
      </main>
    )
  }
}
