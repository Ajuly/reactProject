import * as Types from "../action-types";

let initState = {
  currentLesson: "0",
  slider: {
    loading: false,
    list: []
  },
  lesson: {
    loading: false,
    hasMore: true, // 有没有更多，判断是否调用接口
    limit: 5,
    offset: 0,
    list: []
  }
};

export default function home(state = initState, action) {
  switch (action.type) {
    case Types.SET_CURRENT_LESSON:
      return { ...state, currentLesson: action.lesson };
    case Types.GET_SLIDERS:
      return {
        ...state,
        slider: {
          ...state.slider,
          loading: true
        }
      };
    case Types.GET_SLIDERS_SUCCESS:
      return {
        ...state,
        slider: {
          loading: false,
          list: action.payload
        }
      };
    case Types.GET_LESSONS:
      return {
        ...state,
        lesson: {
          ...state.lesson,
          loading: true
        }
      };
    case Types.GET_LESSONS_SUCCESS:
      return {
        ...state,
        lesson: {
          ...state.lesson,
          loading: false,
          hasMore:action.payload.hasMore,
          list: [...state.lesson.list,...action.payload.list],
          offset:state.lesson.offset + action.payload.list.length
        }
      };
    case  Types.CLEAR_LESSONS:
      return {
        ...state,
        lesson:{
          ...state.lesson,
          offset:0,
          list:[],
          loading:false,
          hasMore:true
        }
      }
  }
  return state;
}
