var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();

const connection =  require("./database.js");

// connect to database
connection();

var usersRouter = require('./routes/user.routes');
var todoRouter = require('./routes/todo.routes');

var app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());




app.use('/user', usersRouter);
app.use('/todo', todoRouter);


module.exports = app;
