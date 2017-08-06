import React, { Component } from 'react'
import Link from 'next/link'

export default class Nav extends Component {
  componentDidMount () {
    // initSideNav();
  }

  render () {
    return (
      <header className={this.props.headerType}>
        <div>
          <nav className='main-nav search-nav'>
            <div className='nav-wrapper'>
              <a href='/' className='fus-branding'>
                Mooneye Productions
              </a>
              <a
                href='#'
                data-activates='mobile-demo'
                className='button-collapse'
              >
                <svg
                  viewBox='0 0 24 24'
                  fill='#fff'
                  height='24'
                  width='24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M0 0h24v24H0z' fill='none' />
                  <path d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' />
                </svg>
              </a>
            </div>
          </nav>
        </div>
        <ul className='side-nav' id='mobile-demo' style={{ width: '200px' }}>
          <li>
            <Link prefetch href='/' title='Home'>
              <a>Home</a>
            </Link>{' '}
          </li>
          <li>
            <Link prefetch href='/about'>
              <a>About</a>
            </Link>{' '}
          </li>
          <li>
            <Link prefetch href='/blog' title='Blog'>
              <a>Blog</a>
            </Link>
          </li>{' '}
          <li>
            {' '}<Link prefetch href='/reboot'>
              <a>Reboot</a>
            </Link>{' '}
          </li>
          <li>
            {' '}<Link prefetch href='/roadmap'>
              <a>Roadmap</a>
            </Link>{' '}
          </li>
          <li>
            {' '}<Link prefetch href='/recipes'>
              <a>Recipes</a>
            </Link>{' '}
          </li>
          <li>
            {' '}<Link prefetch href='/links'>
              <a>Links</a>
            </Link>{' '}
          </li>
        </ul>
        <style jsx>{`
          @media screen and (max-width: 992px) {
            nav {
              height: 110px;
            }
          }
          @media screen and (max-width: 600px) {
            nav {
              height: 92px;
            }
            nav .brand-logo {
              margin-top: 11px;
            }
            nav .button-collapse {
              margin-top: 14px;
            }
          }
          @media screen and (max-width: 992px), screen and (max-height: 500px) {
            nav .brand-logo img {
              height: 70px;
              margin-top: 0;
            }
          }
          .side-nav .logo {
            height: 100px;
            background-color: #000;
            border-bottom: 2px solid #8e1b21;
            text-align: center;
          }
          .side-nav .logo a:hover {
            background-color: #000;
          }
          .side-nav .logo img {
            width: auto;
            height: 80px;
          }
        `}</style>
      </header>
    )
  }
}
