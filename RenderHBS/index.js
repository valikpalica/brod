const Autorization_render = (req,res) =>{
    res.render('autorization.hbs');
}
const Registration_render = (req,res) =>{
    res.render('registration.hbs');
}

module.exports = {Autorization_render,Registration_render};