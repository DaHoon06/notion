import React from "react";
import PropTypes from 'prop-types'

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <main>
      {children}
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout;