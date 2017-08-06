import React, { Component } from 'react'
import ReactGA from 'react-ga'
import PropTypes from 'prop-types'

export default class OutLink extends Component {
  static propTypes = {
    children: PropTypes.string,
    to: PropTypes.string,
    label: PropTypes.string,
    restProps: PropTypes.object
  }

  render () {
    const handleOutbound = eventLabel => {
      ReactGA.event({
        category: 'Outbound',
        action: 'click',
        label: eventLabel
      })
    }

    const { children, to, label, ...restProps } = this.props

    return (
      <a
        {...restProps}
        href={to}
        target='_blank'
        onClick={() => handleOutbound(label)}
      >
        {children}
      </a>
    )
  }
}
