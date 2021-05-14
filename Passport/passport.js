const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../API_DB/User');

function initialize(passport) {
    passport.use(new LocalStrategy(async function (username, password, done) {
            User.find({username,password},async (user)=>{
                if(user==null){
                    return done(null, false, { message: 'No user with that login' });
                }
                try {
                    let status = await bcrypt.compare(password,user.password);
                    if (status) {
                        return done(null, user)
                    } else {
                        return done(null, false, { message: 'Password incorrect' })
                    }
                } catch (error) {
                    return done(error)
                }
            });
        }
    ));
    passport.serializeUser((user, done) => done(null, user));
    passport.deserializeUser((user, done) => {
        return done(null, user);
    })
}
module.exports = initialize;