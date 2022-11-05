import styles from '../styles/Home.module.css'
import Image from 'next/image';
import Head from 'next/head';
function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>Home Page</title>
        <meta name="keywords" content="Homepage, next js, practice" />
        <meta name="description" content="This is the Home page" />
        <link rel="canonical" href="/" />
      </Head>
      <h1 className={styles.fonts}>Hello World</h1>
      <div id='imageWrapper'>
        <style jsx>{`
        #imageWrapper{
          text-align:center;
          width:300px;
          height:320px;
          background:red;
        }`}</style>
        {/* for using Image tag in next js we have to use width and height attribute every time we use Image tag. */}
        <Image width="300" height="300" src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt='photos'/>
      </div>
    </div>
  )
}

export default Home;
