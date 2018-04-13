// 主要就是实现跟用户相关的接口

import axios from './index'

export let login = (userInfo) =>{
    return axios.post('./login',userInfo)
};

export let reg = (userInfo) =>{
    return axios.post('./reg',userInfo)
};


export let validate = () =>{
    return axios.get('./validate')
};
