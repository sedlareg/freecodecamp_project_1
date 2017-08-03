import React, { Component } from 'react'
class Footer extends Component {
  currentYear () {
    let today = new Date()
    return today.getFullYear()
  }

  render () {
    return (
      <footer className='page-foot home-view'>
        <div className='container'>
          <div className='row'>
            <div className='col s12 m3'>
              <h5 className='light'>Contact</h5>
              <address>
                <p typeof='schema:PostalAddress'>
                  <span property='schema:streetAddress'>
                    1235 University Boulevard
                  </span>
                  <br />
                  <span property='schema:addressLocality'>
                    Steubenville
                  </span>,{' '}
                  <abbr title='Ohio' property='schema:addressRegion'>
                    OH
                  </abbr>{' '}
                  <span property='schema:postalCode'>43952</span>{' '}
                  <abbr property='schema:addressCountry'>USA</abbr>
                  <br />
                  <a
                    href='tel:+17402836754'
                    property='telephone'
                    className='white-text'
                  >
                    740.283.6754
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
              <h5 className='light'>About the Catechetical Institute</h5>
              <p>
                The Catechetical Institute at Franciscan University exists to
                train and support the key catechists in any situation—priests,
                deacons, parents, or laity, whether professional or volunteer.
                Through conferences, online workshops, videos, audio, personal
                mentorship, and a wealth of resources produced by Franciscan
                University, all involved in the work of catechesis will find new
                ideas, new approaches, new techniques, and a new confidence to
                do the work of catechesis.
              </p>
            </div>
            <div className='col s12 m3'>
              <h5 className='light'>Related Links</h5>
              <ul>
                {/*  <li><a href="http://www.franciscanathome.com/" title="Franciscan at Home" target="_blank">Franciscan at Home</a></li> */}
                <li>
                  <a
                    href='https://www.steubenvilleconferences.com/'
                    title='Steubenville Conferences'
                    target='_blank'
                  >
                    Steubenville Conferences
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.franciscan.edu/veritas'
                    title='Veritas Center'
                    target='_blank'
                  >
                    Veritas Center for Ethics in Public Life
                  </a>
                </li>
                <li>
                  <a
                    href='http://www.faithandreason.com/'
                    title='Faith and Reason'
                    target='_blank'
                  >
                    Faith and Reason
                  </a>
                </li>
                <li>
                  <a
                    href='https://review.catechetics.com/'
                    title='The Catechetical Review'
                    target='_blank'
                  >
                    The Catechetical Review
                  </a>
                </li>
                <li style={{ marginTop: '8px' }}>
                  <a
                    href='https://giving.franciscan.edu/'
                    title='Donate'
                    target='_blank'
                  >
                    <button className='btn waves-effect waves-light btn-inverted-white'>
                      Donate
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
              <a
                href='https://www.franciscan.edu/ferpa/'
                title='Privacy Policy'
                target='_blank'
              >
                Privacy Policy
              </a>
              <a
                href='https://www.franciscan.edu/consumer-information/non-discrimination/'
                title='Nondiscrimination Statement'
                target='_blank'
              >
                Nondiscrimination Statement
              </a>
            </div>
            © <span id='copyright-date'>{this.currentYear()}</span> Franciscan
            University of Steubenville
          </div>
          <a
            className='hide-on-med-and-down'
            href='https://www.franciscan.edu/ferpa/'
            title='Privacy Policy'
            target='_blank'
          >
            Privacy Policy
          </a>
          <a
            className='hide-on-med-and-down'
            href='https://www.franciscan.edu/consumer-information/non-discrimination/'
            title='Nondiscrimination Statement'
            target='_blank'
          >
            Nondiscrimination Statement
          </a>
        </div>
      </footer>
    )
  }
}

export default Footer
