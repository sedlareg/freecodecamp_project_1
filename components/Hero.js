import React, { Component } from 'react'
export default class Hero extends Component {
  render () {
    return (
      <div
        className='section valign-wrapper hide-on-med-and-down'
        id='hero'
        style={{ marginTop: '-150px' }}
      >
        <link
          href='https://fonts.googleapis.com/css?family=Audiowide'
          rel='stylesheet'
        />
        <div className='row right valign white-text'>
          <div className='col s12 m6'>
            <h1
              style={{
                fontFamily: "'Audiowide', cursive",
                lineHeight: '.9'
              }}
            >
              Where is the ordinary klingon.
            </h1>
          </div>
          <div className='col s12 m6' />
        </div>
        <style jsx>{`
          #hero {
            height: 68vh;
            max-height: 500px;
            background-image: url(/static/img/mooneye_hero.jpg);
            background-size: 100vw;
            background-repeat: no-repeat;
            background-position-y: 25%;
            background-color: #000;
            margin-top: -74px;
            padding-bottom: 0;
          }
          #hero h1 {
            padding-top: 180px;
            font-size: 81px;
          }
          @media screen and (min-width: 2000px) {
            #hero {
              background-size: 100vw;
              background-position-y: 25%;
              background-position-x: 0%;
            }
          }
          @media screen and (max-width: 1200px) {
            #hero {
              background-image: url(/static/img/mooneye_hero.jpg);
              background-position-y: 35%;
            }
            #hero h1 {
              padding-top: 163px;
              font-size: 55px;
            }
          }
          @media screen and (max-height: 650px) {
            #hero h1 {
              padding-top: 163px;
              font-size: 55px;
            }
          }
          @media screen and (max-width: 828px), screen and (max-height: 500px) {
            #hero {
              display: none;
            }
          }
          #hero .row {
            margin-bottom: 0;
          }
        `}</style>
      </div>
    )
  }
}
