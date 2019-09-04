const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('./models.js.js');

describe('我的测试数据', () => {
    it('添加数据', () => {
        let addData = new MarioChar({
            name: 'chenjunhua',
            weight: 22
        });
        addData.save().then(result => {
            console.log(result, 'result');
        });
    });
    // it("删除数据",()=>{
    //     MarioChar.findOneAndRemove({name:'zhangjinxi'}).then((result)=>{
    //         console.log(result,'result')
    //     })
    // })

    // it('查看数据',()=>{
    //     MarioChar.find({name:'chenjunhua'}).then((result)=>{
    //         console.log(result,'result')
    //     })
    // })

    // it('更改数据',()=>{
    //     MarioChar.findOneAndUpdate({name:'chenjunhua'},{name:'陈军华'}).then((result)=>{
    //         console.log(result,'result')
    //     })
    // })
});

// //测试时对当前测试的一个描述
// describe('my mocha test', () => {
//     //创建需要测试的任务
//     it('测试两个数值是否相等', () => {
//         //适用断言
//         // assert(2 + 3 == 5);
//         let char = new MarioChar({
//             name: '丁雅静',
//             weight:22
//         })
//         //存储数据
//         char.save().then(result => {
//             console.log(result.name)
//             assert(result.isNew === false)
//         })
//     })
// })
// describe('查找数据', () => {
//     it('finding data', (done) => {
//         MarioChar.findOne({name: 'zhangjinxi'}).then(result => {
//             console.log(result.name);
//             done();
//         });
//     });

//     it('deleting data form db',()=>{
//         MarioChar.findOneAndRemove({name:'zhangjinxi'}).then((result)=>{
//             assert(result.name == 'zhangjinxi')
//         })
//     })
// });
