const express = require('express');
const dotenv = require('dotenv');
const bodyparser = require("body-parser");
const path = require('path');

const connectDB = require('./server/database/connection');

const app = express();
const PORT = process.env.PORT || 8081
connectDB();
app.use(bodyparser.urlencoded({ extended : true}))

app.set("view engine", "ejs")

app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
//app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

app.use('/', require('./server/routes/router'))

app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});
