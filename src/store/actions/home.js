// 创建关于首页更改redux的所有动作
import * as Types from "../action-types";
import { getSliders ,getLessons } from "../../api/home";

let action = {
  setCurrentLesson(type) {
    return (dispatch,getState) =>{
      dispatch({type:Types.SET_CURRENT_LESSON,lesson:type});
      dispatch({type:Types.CLEAR_LESSONS}); // 清除原有的数据
      action.setLessons()(dispatch,getState); // 根据最新类型改变数据
    }
  },
  refresh(){
    return(dispatch,getState )=>{ 
      dispatch({type:Types.CLEAR_LESSONS});
      action.setLessons()(dispatch,getState);
    }
  },
  setSliders() {
    return (dispatch) => {
      dispatch({
        type: Types.GET_SLIDERS
      });
      dispatch({
        type: Types.GET_SLIDERS_SUCCESS,
        payload: getSliders()
      });
    };
  },
  setLessons() {
    return(dispatch,getState )=>{ // store.getState()
      let {
        currentLesson,
        lesson:{limit,offset,hasMore,loading }
      } = getState().home;
      // 先把loading改成正在加载
      if(hasMore && !loading){
        dispatch({
          type: Types.GET_LESSONS
        });
        dispatch({
          type: Types.GET_LESSONS_SUCCESS,
          payload: getLessons(limit,offset,currentLesson)
        });
      }
    }
  }
};

export default action;
