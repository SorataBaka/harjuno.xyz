import styles from "../styles/Home.module.css"
import react from "react"
import Image from "next/image"
export default class List extends react.Component {
  constructor(props){
    super(props)
    this.items = props.items
  }
  render(){
    return(
      <div className={styles.items}>
          {this.items.map((item) => (
            <a href={item.website} key={item.id}>
              <div className={styles.itemImage}>
                <Image 
                  src={item.svgSource}
                  alt={item.toolName}
                  width="100%"
                  height="100%"
                />
              </div>
              {/* <img src={item.svgSource} alt={item.toolName} className={styles.itemImage}/> */}
            </a>
          ))}
      </div>
    )
  }
}