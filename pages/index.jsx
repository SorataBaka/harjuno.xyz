import Head from 'next/head'
import styles from '../styles/Home.module.css'
import react from "react"
import dotenv from "dotenv"
dotenv.config()
export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Personal page for Christian Harjuno" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Christian Harjuno" />
        <meta property="og:description" content="Personal page for Christian Harjuno" />
        <meta property="og:url" content="https://harjuno.xyz" />
        <meta property="og:type" content="website" />
      </Head>

      <main className={styles.main}>
        <div className={styles.mainContent}>
          <div className={styles.indexBody}>
            <img src="/api/profileimage" alt="Christian Harjuno Profile Picture"  className={styles.profilePicture}/>
              <h1 className={styles.name}>Christian Harjuno</h1>
              <h4 className={styles.title}>Web Developer</h4>
              <p className={styles.aboutMe}>Hi! I’m Chris, an amateur Web/Software Developer who are currently attending college for a Computer Science degree in Bina Nusantara University. Currently active developing Discord Bots for various community servers. I tend to use my skills to automate small insignificant tasks to make things more streamline and efficient. I am always actively learning new things and experimenting to expand my knowledge in programming.</p>  
            <br />
          </div>
          <div className={styles.indexBody}>
            <h2 className={styles.pageSectionTitle}>Tools I use</h2>
            <ToolsList tools={props.tools}/>
          </div>
          <div className={styles.indexBody}>
            <h2 className={styles.pageSectionTitle}>Contact Me</h2>
            <SocialsList socials={props.socials}/>
          </div>
        <div className={styles.footer}>
          <h5>Copyright © 2022 All Right Reserved. Christian Harjuno</h5>
        </div>
        </div>


      </main>
    </div>
  )
}
class ToolsList extends react.Component {
  constructor(props){
    super(props)
    this.tools = props.tools
  }
  render(){
    return(
      <div className={styles.toolList}>
          {this.tools.map((tool) => (
            <a href={tool.website} key={tool.id}>
              <img src={tool.svgSource} alt={tool.toolName} className={styles.toolImage}/>
            </a>
          ))}
      </div>
    )
  }
}
class SocialsList extends react.Component {
  constructor(props){
    super(props)
    this.socials = props.socials
  }
  render(){
    return (
      <div className={styles.toolList}>
        {this.socials.map((social) => (
          <a href={social.website} key={social.id}>
            <img src={social.svgSource} alt={social.socialName} className={styles.toolImage}/>
          </a>
        ))}
      </div>
    )
  }
}
export async function getStaticProps(){
  const toolsRequest = await fetch(`${process.env.DOMAIN_NAME}/api/tools`);
  const tools = await toolsRequest.json()
  const socialsRequest = await fetch(`${process.env.DOMAIN_NAME}/api/social`);
  const socials = await socialsRequest.json()
  return {
    props: {
      tools,
      socials
    }
  }
}