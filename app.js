const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const users = require('./db/dbconfig');
const conn=mysql.createConnection(users);
const methodOverride = require('method-override');
const moment = require('moment');
const {
    connect
} = require('http2');
require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");

conn.connect();

if(conn){
    console.log('mysql db 연결됨');
}else{
    console.log('mysql 연결 안됨');
}

const app=express();
const port=3000;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.set('views',__dirname+'/views');
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.send('hi 3209\'s board!');
})

app.listen(port,()=>{
    console.log('Connected express server at localhost!');
})

//연결시켜주는 것만.