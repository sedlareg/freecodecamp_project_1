import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Title extends Component {
  static propTypes = {
    title: PropTypes.string,
    imgPath: PropTypes.string
  }

  render () {
    const { title } = this.props

    return (
      <section id='about' className='interior-page-title valign-wrapper'>
        <h1 className='center light valign'>
          {title}
        </h1>
        <style jsx>{`
          h1 {
            margin: 0 auto;
            font-size: 50px;
            padding: 16px 0 19px 0;
          }
          @media screen and (max-width: 799px) {
            h1 {
              margin-bottom: -19px;
              background-size: 90px;
            }
          }
          @media screen and (min-width: 800px) {
            .interior-page-title {
              background-size: cover;
              background-repeat: no-repeat;
              background-position: center;

              min-height: 39vh;
            }
            h1 {
              linear-gradient(
                  rgba(255, 255, 255, 0.75),
                  rgba(255, 255, 255, 0.75)
               );
              background-color: rgba(255, 255, 255, 0.5);
              border-radius: 50%;
              margin: 0 auto;
              font-size: 54px;
              padding: 35px;
            }
          }
        `}</style>

        <style jsx global>
          {`
            @media screen and (min-width: 800px) {
              #about .interior-page-title {
                background-image: url(/static/img/new/about-title.jpg);
              }
              #blog .interior-page-title {
                background-image: url(/static/img/new/blog-title.jpg);
              }
              #reboot .interior-page-title {
                background-image: url(/static/img/new/reboot-title.jpg);
              }
              #roadmap .interior-page-title {
                background-image: url(/static/img/new/roadmap-title.jpg);
                background-position-y: 60%;
              }
              #recipes .interior-page-title {
                background-image: url(/static/img/new/recipes-title.jpg);
                background-position-y: 97%;
              }
              #links .interior-page-title {
                background-image: url(/static/img/new/links-title.jpg);
                background-position-y: 43%;
              }
              #single-day .interior-page-title {
                background-image: url(/static/img/new/roadmap-title.jpg);
                background-position-y: 0;
              }
              #single-post .interior-page-title {
                background-image: url(/static/img/new/blog-title.jpg);
              }
            }
          `}
        </style>
      </section>
    )
  }
}
