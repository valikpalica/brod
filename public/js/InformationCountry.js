document.addEventListener('DOMContentLoaded',(event)=>{
    event.preventDefault();
    let id = document.getElementById('id').value;
    fetch('/admin/infoCountry',{
        method:'POST',
               headers: {
                   'Content-Type': 'application/json'
               },
               body:JSON.stringify({country_id:id})
    }).then(data=>{
        return data.json();
    }).then(country=>{
        console.log(country);
    }).catch(err=>{console.log(err)})
})