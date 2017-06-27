/**
 * Created by ok on 2016/7/12.
 * cnpm install express body-parser
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');//引用，用来转换解析req.body
var history = require('connect-history-api-fallback');
var port = 8889;
var cp = require('child_process');
app.use(express.static('./'));

app.use(bodyParser.json());

// app.use(history({
//     index: '/',
//     logger: console.log.bind(console+"自己打印出来的~")
// }))

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, function () {
    console.log('  ~port '+port+'!');
    //浏览器中打开
    cp.exec("open -a '/Applications/Google Chrome.app' 'http://localhost:"+port+"/index.html'");
});









