const express = require('express');
const app = express();
const parser = require('body-parser');
const path = require('path');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const main_route = require('./Router/autorization_system');
const page_route = require('./Router/page');
const admin_route = require('./Router/dataforAdmin');
const cookieParser = require('cookie-parser');
const _location = __dirname;
app.use(parser.urlencoded({extended:false}));
app.use(parser.json());
app.use(cookieParser('secret key'))
app.set("view engine", "hbs");
app.use(express.static(path.join(_location,'public')));
const initialize = require('./Passport/passport');
initialize(passport);
app.use(flash());
app.use(session({
    secret: 'sasha',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 24*60*60*1000
    }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/main',main_route);
app.use('/page',page_route);
app.use('/admin',admin_route);
app.listen(8080,()=>{
    console.log('server has been started port 8080');
});