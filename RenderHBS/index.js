const Autorization_render = (req,res) =>{
    res.render('autorization.hbs');
}
const Registration_render = (req,res) =>{
    res.render('registration.hbs');
}
const AllPeople_render = (req,res)=>{
    res.render('allPerson.hbs');
}
const AllCountry_render = (req,res)=>{
    res.render('allCountry.hbs');
}
module.exports = {Autorization_render,Registration_render,AllPeople_render,AllCountry_render};