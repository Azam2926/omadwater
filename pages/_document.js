import Document, {Head, Html, Main, NextScript} from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html className='scroll-smooth'>
        <Head>
          {/*<link rel="icon" href={"/images/favicon.png"} sizes="32x32" />*/}
          <link rel="dns-prefetch" href="//fonts.googleapis.com"/>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:400,400italic,600,600italic,700,700italic,800,800italic,900,900italic|Dosis:400,500,600,700,800&amp;subset=latin" type="text/css" media="all"/>
          <link rel="stylesheet" href="//fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&amp;display=block" type="text/css" media="all"/>
        </Head>
        <body className={'font-nunito'}>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    )
  }
}

export default MyDocument