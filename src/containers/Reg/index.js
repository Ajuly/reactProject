import React, { Component } from 'react'
import './index.less'
import Header from '../../components/Header/Header'
import Alert from '../../components/Alert/index'
import {connect} from 'react-redux'
import actions from '../../store/actions/session'

class Reg extends Component {
  reg(){
    this.props.toReg({username:this.username.value,password:this.password.value},this.props.history.push);
  }
  render() {
    return (
      <div className="login">
        <div>
            <Header title="注册" />
            <ul>
                <li><input type="text" ref={(username)=>this.username = username} /></li>
                <li><input type="text" ref={(password)=>this.password = password} /></li>
                <li><button onClick={this.reg.bind(this)}>注册</button></li>
                <li><Alert /></li>
            </ul>
        </div>
      </div>
    )
  }
}

export default  connect(state =>({...state.session}),actions)(Reg)
