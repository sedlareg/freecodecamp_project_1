import React, { Component } from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

export default class Header extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
  }

  componentDidMount () {}

  render () {
    const { title, description } = this.props

    return (
      <div>
        <Head>
          <meta charset='utf-8' />
          <title dangerouslySetInnerHTML={{ __html: title }} />
          <meta name='description' content={description} />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          {/* <link rel='shortcut icon' href='/static/favicon.ico' /> */}
          <link
            href='https://fonts.googleapis.com/css?family=Josefin+Sans'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/icon?family=Material+Icons'
            rel='stylesheet'
          />
          <link href='/static/css/materialize.css' rel='stylesheet' />
          <link href='/static/css/style.css' rel='stylesheet' />
          <script
            type='application/javascript'
            dangerouslySetInnerHTML={{
              __html: `var gaProperty = 'UA-104063875-1';\nvar disableStr = 'ga-disable-' + gaProperty;\nif(document.cookie.indexOf(disableStr + '=true') > -1) {\n\twindow[disableStr] = true;\n}`
            }}
          />
        </Head>
      </div>
    )
  }
}
