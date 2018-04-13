import React, { Component } from 'react'
import './index.less'
import Header from '../../components/Header/Header'
import Alert from '../../components/Alert/index'
import {Link} from 'react-router-dom'

import {connect} from 'react-redux'
import actions from '../../store/actions/session'

class Login extends Component {
  login(){
    this.props.toLogin({username:this.username.value,password:this.password.value},this.props.history.push);
  }
  render() {
    return (
      <div className="login">
        <div>
            <Header title="登陆" />
            <ul>
                <li><input type="text" ref={(username)=>this.username = username} /></li>
                <li><input type="text" ref={(password)=>this.password = password} /></li>
                <li><Link to="/reg">前往注册</Link></li>
                <li><button onClick={this.login.bind(this)}>登陆</button></li>
                <li><Alert /></li>
            </ul>
        </div>
      </div>
    )
  }
}

export default connect(state =>({...state.session}),actions)(Login)
