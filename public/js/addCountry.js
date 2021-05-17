document.addEventListener('DOMContentLoaded',(event)=>{
    let cookie = document.cookie;
    let status = cookie.split('=')[1];
    if(status=='admin'){
        document.getElementById('button').addEventListener('click',(event)=>{
            event.preventDefault();
            let name = document.getElementById('name').value;
        let obj = {name};
        fetch('/admin/addCountry',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
                
            },
            body:JSON.stringify(obj)
        }).then(res=>{
            window.location.href = '/page/allCountry';
        }).catch(err=>{
            console.error(err);
        })
        })
    }
    else{
        alert('Permition daniead, please autorization');
    }
})
