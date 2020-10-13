import React, {Component} from  'react'
import './style.css'

class Contact extends Component {
    render () {
      return (
        <div className="Contact">
            <img src="https://i.ibb.co/VqNQKWj/lizars.jpg" className="avatar" alt="lizard"></img>
            <div>
            <div className="name">John Dick
            </div>
            <div className="status">
            <div className="status-online"></div>
            <p className="status-text">Online</p>
            </div>
            </div>
        </div>
      )
    } 
    }
export default Contact