import React, { Component } from "react";
import logo from "../../images/logo.png";

import Transition from 'react-transition-group/Transition';

import "./index.less";
// react动画效果
const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
//   display:"none"
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered:  { opacity: 1 },
};

export default class HomeHeader extends Component {
  constructor() {
    super();
    this.state = { isShow: false };
  }

  changeShow = () => {
    this.setState({ isShow: !this.state.isShow });
  };

  changeType = (e) => {
      // console.log(e.target.dataset.type)
      // 调用父级的方法传给父级 
      this.props.changeType(e.target.dataset.type)
      this.changeShow()
  }

  render() {
    return (
      <div className="home-header">
        <div className="home-header-logo">
          <img src={logo} alt="" />
          <div className="home-header-btn" onClick={this.changeShow}>
            {this.state.isShow ? (
              <i className="iconfont icon-guanbi" />
            ) : (
              <i className="iconfont icon-uilist" />
            )}
          </div>
        </div>
        <Transition in={this.state.isShow} timeout={duration} onEnter={(node) => {
           node.style.display="block"
        }} onExited={(node)=>{
            node.style.display="none"
        }}>
        {
            (state) => (
                <ul className="home-header-list" style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                  }} onClick={this.changeType.bind(this)}>
                    <li data-type="0">全部课程</li>
                    <li data-type="1">React课程</li>
                    <li data-type="2">Vue课程</li>
                </ul> 
            )
        }
        </Transition>
        
      </div>
    );
  }
}


// import { CSSTransition, TransitionGroup } from "react-transition-group";
// <TransitionGroup>
//     {this.state.isShow ? (
//     <CSSTransition timeout={1000} classNames="fadeIn">
//         <ul className="home-header-list">
//         <li>全部课程</li>
//         <li>React课程</li>
//         <li>Vue课程</li>
//         </ul>
//     </CSSTransition>
//     ) : null}
// </TransitionGroup>