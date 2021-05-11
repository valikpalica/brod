const express = require('express');
const app = express();
const parser = require('body-parser');
const path = require('path');
const main_route = require('./Router/main_route');
const _location = __dirname;
app.use(parser.urlencoded({extended:false}));
app.use(parser.json());
app.set("view engine", "hbs");
app.use(express.static(path.join(_location,'public')));
app.use('/main',main_route);

app.listen(8080,()=>{
    console.log('server has been started port 8080');
});