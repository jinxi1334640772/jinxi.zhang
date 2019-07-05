let express = require('express')
let path = require('path')

let server = express()

//匹配路由
server.use('/detail',(req,res) => {
    res.status(200).sendFile(path.join(__dirname,'express','list.html'))
})
//静态目录，默认页面index.html
server.use(express.static(path.join(__dirname,'express')))
//错误页面
server.use('*',(req,res) => {
    res.status(200).sendFile(path.join(__dirname,'express','404.html'))
})
server.listen(3000,(err) => {
    if(err) {
        console.log('监听失败')
        throw err
    }
    console.log('服务器已经启动，在3000端口')
})