/* global stickyNav */
import React, { Component } from 'react'
import Link from 'next/link'

export default class StickyNav extends Component {
  componentDidMount () {
    stickyNav()
  }

  render () {
    return (
      <div className='section bottom-nav'>
        <ul className='hide-on-med-and-down'>
          <li>
            <Link prefetch href='/about'>
              <a>Über mich</a>
            </Link>
          </li>
          <li>
            <Link prefetch href='/blog'>
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link prefetch href='/reboot'>
              <a>Reboot</a>
            </Link>
          </li>
          <li>
            <Link prefetch href='/roadmap'>
              <a>Roadmap</a>
            </Link>
          </li>
          <li>
            <Link prefetch href='/recipes'>
              <a>Rezepte</a>
            </Link>
          </li>
          <li>
            <Link prefetch href='/links'>
              <a>Links</a>
            </Link>
          </li>
        </ul>
        <style jsx>
          {`
            ul li {
              float: left;
              line-height: 8px;
              padding: 6px 0 0 0;
            }
            ul li a {
              color: #fff;
              text-transform: uppercase;
              font-size: 22px;
              font-family: 'Josefin Sans', sans-serif;
              cursor: pointer;
              padding: 6px 12px 7px 12px;
              line-height: 19px;
              transition: .3s ease-in-out;
              font-weight: 600;
            }
            .bottom-nav ul li a:hover {
              background-color: hsl(8, 100%, 75%);
            }
          `}
        </style>
      </div>
    )
  }
}
