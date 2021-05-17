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
const AddPerson = (req,res) =>{
    res.render('addPerson.hbs');
}
const AddCountry = (req,res) =>{
    res.render('addCountry.hbs');
}
module.exports = {Autorization_render,Registration_render,AllPeople_render,AllCountry_render,AddPerson,AddCountry};