import React, { Component } from "react";
import HomeHeader from "./HomeHeader";
import HomeSlider from "./HomeSlider";
import HomeList from "./HomeList";
import Loading from "../../components/Loading/index";
import { loadMore ,pullRefresh } from '../../util'
import "./index.less";


import actions from "../../store/actions/home.js";
import { connect } from "react-redux";

class Home extends Component {
  componentDidMount() {
    this.props.setSliders();
    this.props.setLessons();
    loadMore(this.x,this.props.setLessons);
    pullRefresh(this.x,this.props.refresh);
  }

  changeType = value => {
    this.props.setCurrentLesson(value);
  };

  render() {
    return (
      <div>
        <HomeHeader changeType={this.changeType} />
        <div className="content" ref={x => this.x = x}>
          {
            !this.props.slider.loading? <HomeSlider lists={this.props.slider.list} />: <Loading />
          }
          <div className="container">
            <h3>
              <i className="iconfont icon-book"></i>
              我的课程
            </h3>
            <HomeList   lists={this.props.lesson.list}/>
            {this.props.lesson.loading? <Loading /> : null}
            <button onClick={() =>{
              this.props.setLessons();
            }}>加载更多</button>
          </div>
        </div>
      </div>
    );
  }
}

// mapStateToProps 将redux中的数据映射到当前组件的实现 store.getState() = {home:currentLessonType:'0}
export default connect(state => ({ ...state.home }), actions)(Home);

// 讲方法映射成属性
// @connect(state=>({
//   sliders:state.home.sliders,
// }),actions)


