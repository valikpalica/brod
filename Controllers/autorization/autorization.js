const autorization_funk = require('../../API_WK/aut_funk');

module.exports = async (req,res) =>{
    let {username} = req.body; 
    autorization_funk({username}).then(user=>{
        console.log(user);
        let {status} = user;
        if(status === 'admin'){
            console.log(user.status);
        }
        else{
            console.log(user.status);
        }
    }).catch(err=>{
        console.log(err);
    })
    res.redirect('/main/test');
}