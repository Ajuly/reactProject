import React, { Component } from 'react';
import bg from '../../images/login_bg.png';
import profile from '../../images/profile.png';
import './index.less'
import {Link} from 'react-router-dom';

import {connect} from 'react-redux'
import actions from '../../store/actions/session'

class Profile extends Component {
  componentDidMount = () => {
    this.props.toValidate()
  }
  
  render() {
    return (
      <div className="profile">
        <div className="profile-bg">
          <img src={bg} alt=""/>
          <div className="avatar">
            <img src={profile} alt=""/>
          </div>
          {
            this.props.user?<a className="btn">{this.props.user}</a>:<Link className="btn" to="/login">登陆</Link>
          }
        </div>
      </div>
    )
  }
}

export default connect(state =>({...state.session}),actions)(Profile);
