//集合collections 数据模型model
const mongoose = require('mongoose');

//获取规范类
const Schema = mongoose.Schema;

//规范数据格式
const MarioCharSchema = new Schema({
    name: String,
    weight: Number
});

//创建数据模型(创建表)

// const marioChar = mongoose.model('Mario', MarioCharSchema)
const marioChar = mongoose.model('zhangjinxi', MarioCharSchema);

module.exports = marioChar;
