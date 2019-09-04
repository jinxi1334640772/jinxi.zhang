//链接数据库
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//链接MongoDB
mongoose.connect('mongodb://localhost/chenjunhua');
//测试是否链接成功
mongoose.connection
    .once('open', () => {
        console.log('数据库链接成功');
    })
    .on('error', error => {
        console.log('链接失败：', error);
    });
