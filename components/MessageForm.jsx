import react, {useEffect} from "react"
import styles from "../styles/Mail.module.css"
export default class MessageForm extends react.Component{
  constructor(props){
    super(props)

    this.state = {
      name: "",
      title: "",
      message: "",
      email: ""
    }
    this.handleEmail = this.handleEmail.bind(this)
    this.handleMessage = this.handleMessage.bind(this)
    this.handleName = this.handleName.bind(this)
    this.handleTitle = this.handleTitle.bind(this)
  }

  handleSubmit(event){
    event.preventDefaults()
  }
  handleTitle(event){
    this.setState({
      title: event.target.value
    })
  }
  handleName(event){
    this.setState({
      name: event.target.value
    })
  }
  handleMessage(event){
    this.setState({
      message: event.target.value
    })
  }
  handleEmail(event){
    this.setState({
      email: event.target.value
    }, () => {
      console.log(this.state.email)
    })
  }
  render(){
    return (
      <div className={styles.mainForm}>
        <h1 className={styles.header}>Contact me</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Title" value={this.state.title} className={styles.inputBox} required onChange={this.handleTitle}/> 
          <input type="text" placeholder="Name" value={this.state.name} className={styles.inputBox} required onChange={this.handleName}/>
          <input type="text" placeholder="Email" value={this.state.email} className={styles.inputBox} required onChange={this.handleEmail}/>
          <textarea placeholder="Message" value={this.state.message} className={styles.inputText} required onChange={this.handleMessage}></textarea>
        </form>        
      </div>
    )
  }
}