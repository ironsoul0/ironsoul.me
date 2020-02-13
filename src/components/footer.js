import React from 'react'
import PropTypes from 'prop-types'

import { Link } from './link'

const Footer = ({ copyrights }) => (
  <footer>
    {copyrights ? (
      <div
        dangerouslySetInnerHTML={{
          __html: copyrights,
        }}
      />
    ) : (
      <>
        <span className="footerCopyrights">
          © 2020 Built with {' '}
          <Link href="https://www.gatsbyjs.org">Gatsby</Link>
        </span>
        <span className="footerCopyrights">
          Contribute <Link href="https://github.com/ironsoul0/ironsoul.me">here</Link>
        </span>
        <span className="footerCopyrights">
          Forked from <Link href="https://github.com/panr/gatsby-starter-hello-friend">panr</Link>
        </span>
      </>
    )}
  </footer>
)

Footer.propTypes = {
  copyrights: PropTypes.string,
}

export default Footer
