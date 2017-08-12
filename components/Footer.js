import React, { Component } from 'react'
import { OutLink } from '../components'
export default class Footer extends Component {
  currentYear () {
    let today = new Date()
    return today.getFullYear()
  }

  render () {
    return (
      <footer className='page-footer'>
        <div className='container'>
          <div className='row white-text'>
            <div className='col s12 m3'>
              <h5 className='light'>Soziale Kanäle</h5>
              <address>
                <p />
              </address>
            </div>
            <div className='col s12 m6'>
              <h5 className='light'>Spruch des Tages</h5>
              <p>
                All small things capture each other, only alchemistic moons have
                a volume.
              </p>
            </div>
            <div className='col s12 m3'>
              <h5 className='light'>Partner</h5>
              <ul>
                <li>
                  <OutLink
                    label='toMainSiteFooterLink'
                    to='https://www.umami-nation.com/'
                    title='Umami-Nation'
                    target='_blank'
                  >
                    Umami-Nation
                  </OutLink>
                </li>
                <li>
                  <a
                    href='https://www.mooneye.de/'
                    title='Mooneye Productions'
                    target='_blank'
                  >
                    Mooneye Productions
                  </a>
                </li>
                <li style={{ marginTop: '8px' }}>
                  <a href='/contact' title='Contact'>
                    <button className='btn waves-effect waves-light btn-inverted-white'>
                      Kontakt
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='footer-copyright'>
          <div className='container'>
            <div className='row hide-on-large-only center'>
              <a href='/imprint' title='Imprint'>
                Impressum
              </a>
              <a href='/privacy' title='Privacy'>
                Datenschutzerklärung
              </a>
            </div>
            <div className='left'>
              © <span id='copyright-date'>{this.currentYear()}</span> Mooneye
              Productions
            </div>
          </div>
          <a className='hide-on-med-and-down' href='/imprint' title='Imprint'>
            Impressum
          </a>
          <a className='hide-on-med-and-down' href='/privacy' title='Privacy'>
            Datenschutzerklärung
          </a>
        </div>
      </footer>
    )
  }
}
