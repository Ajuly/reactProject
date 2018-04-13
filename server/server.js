let express = require('express')
let session = require('express-session')
let bodyParser = require('body-parser')

let app = express()

app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:'zfpx'
}))

app.use(bodyParser.json());

// 跨域
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","http://localhost:8080");//允许任意端口访问
    res.header("Access-Control-Allow-Headers","Content-Type,Content-Length, Authorization, Accept,X-Requested-With");//允许接收的头
    res.header("X-Powered-By",'3.2.1')
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS"); //允许的方法
    res.header("Access-Control-Allow-Credentials",'true')
    //如果发的是options的请求 响应ok 即可
    if(req.method==="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();

})

// 获取轮播图数据 当访问/slider的时候将数据返回
let sliders = require('./mock/slider.js');
app.get('/sliders',function (req,res) {
   res.json(sliders);
});


// 获取课程数据 当访问/lesson的时候将数据返回
// http://localhost:3000/lessons?limit=5&offset=0&type=1
let lessons = require('./mock/lessons.js');
app.get('/lessons',function (req,res) {
    let {limit,offset,type} = req.query;
    limit = parseInt(limit);
    offset = parseInt(offset);
   
    let newLessons = lessons.filter(item =>{
        if(type === "0") return true;
        return item.type === type;
    })
    
    // 这里要判断下 服务端是否有更多的数据 hasmore
    let hasMore = true;
    let len = newLessons.length; // 获取数据总长
    if(len<offset+limit){ // 没有更多了
        hasMore = false;
    }
    newLessons = newLessons.slice(offset,offset+limit)
    res.json({hasMore,list:newLessons});
});


app.listen(3000);

// 登陆接口
let users = []; // 存放所有用户
// 返回的参数 {msg:'xxx',err:1,user:{username,password}}
app.post('/login',function(req,res){
    let {username,password} = req.body;
    let user = users.find(item =>(item.username == username) && (item.password == password)) 
    if(user){ // 用户已经找到
        req.session.user = req.body;
        res.json({msg:'用户登陆成功',err:0,user:username})
    }else{
        res.json({msg:'用户名密码不正确',err:1})
    }
})

app.post('/reg',function(req,res){
    let {username,password} = req.body;
    let user = users.find(item =>item.username == username )
    if(user){ // 已经存在这样的用户
        res.json({msg:'用户已经存在',err:1})
    }else{
        users.push({username,password}) 
        res.json({msg:'注册成功',err:0})
    }
})

// 校验用户是否登陆
app.get('/validate',function(req,res){
    if(req.session.user){
        res.json({msg:'',err:0,user:req.session.user.username})
    }else{
        res.json({msg:'',err:0,user:null})
    }
})