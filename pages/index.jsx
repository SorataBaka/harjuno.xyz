import Head from 'next/head'
import styles from '../styles/Home.module.css'
import react from "react"
import dotenv from "dotenv"
import Image from "next/image"
dotenv.config()
export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Christian Harjuno</title>
        <meta name="description" content="amateur Web/Software Developer who is currently attending college for a Computer Science degree at Bina Nusantara University. Currently active developing Discord Bots for various community servers." />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Add meta tags for google */}
        <meta name="description" content="Personal website for Christian Harjuno"/>
        <meta name="googlebot" content="index, follow"/>
        <meta name="robots" content="index, follow"/>
        <meta name="google" content="nopagereadaloud" />
        <meta name="title" content="Christian Harjuno"/>
        <meta name="description" content="Personal website of Christian Harjuno"/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://harjuno.xyz//"/>
        <meta property="og:title" content="Christian Harjuno"/>
        <meta property="og:description" content="amateur Web/Software Developer who is currently attending college for a Computer Science degree at Bina Nusantara University. Currently active developing Discord Bots for various community servers. "/>
        <meta property="og:image" content="/api/assets/snapshot.png"/>
        
        <meta name="theme-color" content="#000343"/>
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://harjuno.xyz//"/>
        <meta property="twitter:title" content="Christian Harjuno's Personal Website"/>
        <meta property="twitter:description" content="amateur Web/Software Developer who is currently attending college for a Computer Science degree at Bina Nusantara University. Currently active developing Discord Bots for various community servers. "/>
        <meta property="twitter:image" content="/api/assets/snapshot.png"/>
      </Head>

      <main className={styles.main}>
        <div className={styles.mainContent}>
          <div className={styles.indexBody} id="1">
            <img src="/api/assets/profile.jpg" alt="Christian Harjuno Profile Picture"  className={styles.profilePicture}/>
              <h1 className={styles.name}>Christian Harjuno</h1>
              <h4 className={styles.title}>Web Developer</h4>
              <p className={styles.aboutMe}>Hi! I’m Chris, an amateur Web/Software Developer who is currently attending college for a Computer Science degree at Bina Nusantara University. Currently active developing Discord Bots for various community servers. I tend to use my skills to automate small insignificant tasks to make things more streamlined and efficient. I am always actively learning new things and experimenting to expand my knowledge in programming.</p> 
          </div>
          <div className={styles.indexBody} id="2">
            <h2 className={styles.pageSectionTitle}>Tools I use</h2>
            <List items={props.tools}/>
          </div>
          <div className={styles.indexBody} id="3">
            <h2 className={styles.pageSectionTitle}>Contact Me</h2>
            <List items={props.socials}/>
          </div>
        <div className={styles.footer}>
          <h5>Copyright © 2022 All Right Reserved. Christian Harjuno</h5>
        </div>
        </div>


      </main>
    </div>
  )
}
class List extends react.Component {
  constructor(props){
    super(props)
    this.items = props.items
  }
  render(){
    return(
      <div className={styles.items}>
          {this.items.map((item) => (
            <a href={item.website} key={item.id}>
              <img src={item.svgSource} alt={item.toolName} className={styles.itemImage}/>
            </a>
          ))}
      </div>
    )
  }
}
export async function getStaticProps(){
  const toolsRequest = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/tools`);
  const tools = await toolsRequest.json()
  const socialsRequest = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/social`);
  const socials = await socialsRequest.json()
  return {
    props: {
      tools,
      socials
    }
  }
}