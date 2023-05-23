import React from "react";
import PropTypes from 'prop-types'
import MetaConfig, {MetaConfigProps} from "@/components/header/config/MetaConfig";
import {Header} from "@/components/header";

type Props = {
  children: React.ReactNode
  metaConfig: MetaConfigProps
}

const Layout: React.FC<Props> = (props) => {
  const { children, metaConfig } = props;
  return (
    <>
      <MetaConfig {...metaConfig} />
      <Header />
      <main className={'main'}>
        {children}
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout;