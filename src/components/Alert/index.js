import React, { Component } from 'react'
import './index.less'
import {connect} from 'react-redux'

class Alert extends Component {
  render() {
    return (
        this.props.err === 1?<div>{this.props.msg}</div>:null
    )
  }
}

export default connect(state =>({...state.session}))(Alert);
