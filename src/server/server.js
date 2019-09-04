let http = require('http');
let fs = require('fs');
let myServer = http
    .createServer((req, res) => {
        let url = req.url == '/' ? './index.html' : './' + req.url;
        console.log(url);
        if (fs.existsSync(url)) {
            let data = fs.readFileSync(url);
            res.write(data);
        } else {
            let data = fs.readFileSync('./document/400.html');
            res.write(data);
        }
        res.end();
    })
    .listen('3000', err => {
        if (err) {
            console.log(err);
            throw err;
        }
        console.log('服务器已经在端口号：3000开启！');
    });
