import React, { Component } from 'react'
import { Footer, Head, Hero, Nav, StickyNav } from '../components'
import { initGA } from '../utils/analytics'

export default class Layout extends Component {
  componentDidMount () {
    if (!window.GA_INTIALIZED) {
      initGA()
      window.GA_INTIALIZED = true
    }
  }
  render () {
    const { title, description, headerType, hero, children } = this.props
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Head title={title} description={description} />
        <Nav headerType={headerType} />
        {hero === 'show' && <Hero />}
        <StickyNav />
        {children}
        <Footer />
        <script src='https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js' />
        <script src='https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/js/materialize.min.js' />
        <script src='/static/js/app.js' />
      </div>
    )
  }
}
