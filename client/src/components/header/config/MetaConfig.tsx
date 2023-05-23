import React from "react";
import Head from "next/head";

export type MetaConfigProps = {
  title: string,
  description: string,
  type: string,
  date?: string,
  image?: string,
  url: string,
}

const MetaConfig: React.FC<MetaConfigProps> = ({...props}) => {
  const meta = {
    ...props
  }

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name={'robots'} content={'follow, index'}/>
      <meta charSet={'UTF-8'}/>
      <meta name={'description'} content={meta.description}/>
      {/* og */}
      <meta property={"og:type"} content={meta.type} />
      <meta property={"og:title"} content={meta.title} />
      <meta property={"og:description"} content={meta.description} />
      <meta property={"og:url"} content={meta.url} />
      {/* twitter */}
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
    </Head>
  )
}
export default MetaConfig;