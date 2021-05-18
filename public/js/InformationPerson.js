document.addEventListener('DOMContentLoaded',(event)=>{
    event.preventDefault();
    let id = document.getElementById('id').value;
    fetch('/admin/infoPerson',{
        method:'POST',
               headers: {
                   'Content-Type': 'application/json'
               },
               body:JSON.stringify({person_id:id})
    }).then(data=>{
        return data.json();
    }).then(person=>{
        console.log(person);
    }).catch(err=>{console.log(err)})
})