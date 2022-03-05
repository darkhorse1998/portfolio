import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <p className="copyright">
      <span role="img" aria-label="thinking">
          ❤️
        </span>{' '}
        Thanks to <a className='thanks' href="https://github.com/jigalin/portfolio-landing-page" target='_blank' rel="noopener noreferrer">Matthew Jigalin</a> for the wonderful design
      </p>
    </footer>
  )
}

export default Footer
