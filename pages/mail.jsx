import react from "react"
import mainstyles from "../styles/Home.module.css"
import Head from "next/head"
import Image from "next/image"
import MessageForm from "../components/MessageForm"
export default class Mail extends react.Component{
  constructor(){
    super()
  }
  render(){
    return (
      <div className={mainstyles.container}>
        <Head>
          <title>Christian Harjuno</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* Add meta tags for google */}
          <meta name="description" content="Got questions? Wanna talk? Send me a message through here and I'll try my best to get back to you as fast as possible!"/>
          <meta name="googlebot" content="index, follow"/>
          <meta name="robots" content="index, follow"/>
          <meta name="google" content="nopagereadaloud" />
          <meta name="title" content="Christian Harjuno"/>

          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://harjuno.xyz//"/>
          <meta property="og:title" content="Christian Harjuno"/>
          <meta property="og:description" content="Got questions? Wanna talk? Send me a message through here and I'll try my best to get back to you as fast as possible!"/>
          <meta property="og:image" content="/api/assets/snapshot.png"/>
          
          <meta name="theme-color" content="#000343"/>
          <meta property="twitter:card" content="summary_large_image"/>
          <meta property="twitter:url" content="https://harjuno.xyz//"/>
          <meta property="twitter:title" content="Christian Harjuno's Personal Website"/>
          <meta property="twitter:description" content="amateur Web/Software Developer who is currently attending college for a Computer Science degree at Bina Nusantara University. Currently active developing Discord Bots for various community servers. "/>
          <meta property="twitter:image" content="/api/assets/snapshot.png"/>

          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>          
        </Head>
        <main className={mainstyles.main}>
        <Image 
          src="/api/assets/background.jpg"
          layout='fill'
          alt='background'
          className={mainstyles.background}
          objectFit="cover"
        />
          <div className={mainstyles.mainContent}>
            <div className={mainstyles.indexBody}>
              
              <MessageForm />
            </div>
          </div>
        </main>
      </div>
    )
  }
}
//Props
//States
//Hooks