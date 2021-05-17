document.addEventListener('DOMContentLoaded',(event)=>{
    let cookie = document.cookie;
    let status = cookie.split('=')[1];
    if(status=='admin'){
       document.getElementById('button').addEventListener('click',(event)=>{
           event.preventDefault();
           let name = document.getElementById('name').value;
           let surname = document.getElementById('surname').value;
           let patronime = document.getElementById('patronime').value;
           let date = document.getElementById('date_birthday').value;
           let nationality = document.getElementById('nationality').value;
           let obj = {name,surname,patronime,date,nationality};
           fetch('/admin/addPerson',{
               method:'POST',
               headers: {
                   'Content-Type': 'application/json'
                   
               },
               body:JSON.stringify(obj)
           }).then(res=>{
               window.location.href ='/page/allPerson';
           }).catch(err=>{
               console.error(err);
           })
       })
    }
    else{
        alert('Permition daniead, please autorization');
    }
})
