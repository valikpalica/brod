document.addEventListener("DOMContentLoaded", (event)=>{
    
    document.getElementById('button').addEventListener('click',(event)=>{
        event.preventDefault()
        let login = document.getElementById('login').value;
    let password = document.getElementById('password').value;
    let obj = {
        login,
        password,
    }
    fetch('/main/autorization',{
        method:'POST',
        headers:{
            'Content Type':'application/json'
        },
        body:JSON.stringify({obj})
    }).then(data=> data.json()).then(answer =>{
        if(answer){
            alert('DONE');
        }
        else{
            alert('Not correct')
        }
    }).catch(err=>{
        alert('Sory we have error with server');
    })
    })
});