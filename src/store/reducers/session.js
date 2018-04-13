import * as Types from "../action-types";

let initState = {
  msg: "",
  err:0,
  user:null
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case Types.SET_USER_INFO:
          return { ...action.payload };
    }
    return initState;
}