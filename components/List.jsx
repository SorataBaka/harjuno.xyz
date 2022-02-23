import styles from "../styles/Home.module.css"
import react from "react"
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
              <img src={item.svgSource} alt={item.toolName} className={styles.itemImage}/>
            </a>
          ))}
      </div>
    )
  }
}