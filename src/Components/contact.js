import React, {Component} from  'react'
import './style.css'

class Contact extends Component {
  constructor(props) {
      super(props);
      this.state ={Online:false}
  }
  chStatus =()=> {
    const status = !this.state.Online;
    this.setState({Online:status}) ;}
    render () {
      const {fullname, image}=this.props;
      return (
        <div className="Contact">
            <img src={image} className="avatar"></img>
            <div>
            <div className="name">{fullname}
            </div>
            <div className="status" onClick={this.chStatus}>
            <div className={this.state.Online? "status-online" : "status-offline"}></div>
            <div className="status-text">{this.state.Online? 'online' : 'offline'}</div>
            </div>
            </div>
        </div>
      )
    } 
    }
export default Contact