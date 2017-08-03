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
              <h5 className='light'>Contact</h5>
              <address>
                <p typeof='schema:PostalAddress'>
                  <span property='schema:streetAddress'>Beim Feldtor 13</span>
                  <br />
                  <span property='schema:postalCode'>86513</span>{' '}
                  <span property='schema:addressLocality'>Bayersried</span>,{' '}
                  <abbr property='schema:addressCountry'>Germany</abbr>
                  <br />
                  <a
                    href='tel:+179.......'
                    property='telephone'
                    className='white-text'
                  >
                    +49 179 ... ....
                  </a>
                  <br />
                  <a
                    href='mailto:geraldes@mooneye.de'
                    property='email'
                    className='white-text'
                  >
                    geraldes@mooneye.de
                  </a>
                </p>
              </address>
            </div>
            <div className='col s12 m6'>
              <h5 className='light'>About Mooneye Productions</h5>
              <p>
                The bilge rat whines death like a shiny swabbie. Damn yer
                lubber, feed the sea. The rum trades with life, lead the
                quarter-deck until it rises. The shore tastes with hunger, trade
                the bahamas until it grows!
              </p>
            </div>
            <div className='col s12 m3'>
              <h5 className='light'>Related Links</h5>
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
                    href='https://www.eramon.de/'
                    title='ERAMON GmbH'
                    target='_blank'
                  >
                    ERAMON GmbH
                  </a>
                </li>
                <li style={{ marginTop: '8px' }}>
                  <a href='/contact' title='Contact'>
                    <button className='btn waves-effect waves-light btn-inverted-white'>
                      Contact us
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
                Imprint
              </a>
              <a href='/privacy' title='Privacy'>
                Privacy
              </a>
            </div>
            <div className='left'>
              © <span id='copyright-date'>{this.currentYear()}</span> Mooneye
              Productions
            </div>
          </div>
          <a className='hide-on-med-and-down' href='/imprint' title='Imprint'>
            Imprint
          </a>
          <a className='hide-on-med-and-down' href='/privacy' title='Privacy'>
            Privacy
          </a>
        </div>
      </footer>
    )
  }
}
