let fs = require('fs')
//同步写文件
// let res = fs.writeFileSync('./document/test.txt', '欢迎来到上海！', 'utf8')
// console.log(res) if res == underfined 代表成功
// 异步写文件
// fs.writeFile('./document/test.txt', 'zhangjinxi', 'utf8', (err)=>{console.log(err)})
// 同步读文件
// let data = fs.readFileSync('./document/test.txt')
// console.log(data.toString())
//异步读文件
// fs.readFile('./document/test.txt', 'utf8', (err,data)=>{console.log(err,data)})
//同步判断文件是否存在
// let res =fs.existsSync('./document/t22est.txt')
// console.log(res)
//异步判断文件是否存在
// fs.exists('./document/tesddt.txt', (err)=>{console.log(err)})
//同步追加内容
// let res = fs.appendFileSync('./document/log.txt', Date())
// console.log(res)
//监听文件，当文件内容改变时运行
fs.watchFile('./document/test.txt',(data,data1) => {
    console.log(data)
})