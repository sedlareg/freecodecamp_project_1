import React, { Component } from 'react'

export default class Error404 extends Component {
  render () {
    return (
      <main>
        <div className='container'>
          <div className='section'>
            <div className='row center-align'>
              <h4>
                No content exists at this address. Please try another page.
              </h4>
              <img
                className='responsive-img'
                src='/static/img/Error-404-monsters-inc-.jpg'
              />
            </div>
          </div>
        </div>
      </main>
    )
  }
}
