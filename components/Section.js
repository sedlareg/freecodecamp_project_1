import React, { Component } from 'react'
import { TeamCard } from '../components'
export default class Section extends Component {
  render () {
    return (
      <div className='section'>
        <div className='row valign-wrapper'>
          <div className='col s12 m6 valign'>
            <TeamCard />
          </div>
        </div>
      </div>
    )
  }
}
