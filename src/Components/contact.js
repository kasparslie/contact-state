import React, {Component} from  'react'
import './style.css'


class Contact extends Component {
    render () {
      const {fullName, status, image}=this.props;
      return (
        <div className="Contact">
            <img src={image} className="avatar"></img>
            <div>
            <div className="name">{fullName}
            </div>
            <div className="status">
            <div className={status? "status-online" : "status-offline"}></div>
            <div className="status-text">{status? 'online' : 'offline'}</div>
            </div>
            </div>
        </div>
      )
    } 
    }
export default Contact