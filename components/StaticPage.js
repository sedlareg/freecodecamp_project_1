import React from 'react'
import { Title } from '../components'
import { logPageView } from '../utils/analytics'
import PropTypes from 'prop-types'

export default class StaticPage extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    mainId: PropTypes.string,
    imgPath: PropTypes.string
  }

  componentDidMount () {
    logPageView()
  }

  render () {
    const { title, mainId, imgPath, children } = this.props

    return (
      <main id={mainId}>
        {title && <Title title={title} imgPath={imgPath} />}
        {children}
      </main>
    )
  }
}
