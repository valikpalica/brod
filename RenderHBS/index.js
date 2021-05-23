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
const InfoPerson = (req,res)=>{
    res.render('InfoPerson.hbs',{id:req.params['id']});
}
const InfoCountry = (req,res)=>{
    res.render('InfoCountry.hbs',{id:req.params['id']});
}
const PersonalPage = (req,res) =>{
    res.render('personalPage.hbs');
}
module.exports = {Autorization_render,Registration_render,AllPeople_render,AllCountry_render,AddPerson,AddCountry,InfoPerson,InfoCountry,PersonalPage};