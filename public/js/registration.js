document.addEventListener("DOMContentLoaded", (event)=>{
    document.getElementById('button').addEventListener('click',responseReg);
    document.getElementById('password').addEventListener('change',(event)=>{
        let password = document.getElementById('password').value;
        let information = document.getElementById('first_check');
        information.style.color = 'red';
        information.textContent = 'Not good Password';
        let btn = document.getElementById('button');
        if(password.length<8){
            console.log('<8');
            btn.disabled = true;
            
            information.hidden = false
        }
        else{
            btn.disabled = false;
            information.hidden = true;
        }
    })
    document.getElementById('check_password').addEventListener('change',(event)=>{
        let password_first = document.getElementById('password').value;
        let password_check = document.getElementById('check_password').value;
        let information = document.getElementById('second_check');
        information.style.color = 'red';
        information.textContent = 'Not equls password'
        let btn = document.getElementById('button');
        if(password_first!==password_check){      
            console.log('not correct');      
            btn.disabled = true;
           
            information.hidden = false
        }
        else{
            btn.disabled = false;
            information.hidden = true;
        }
    });
});



const responseReg = (event) =>{
    event.preventDefault();
        let login = document.getElementById('login').value
        let password = document.getElementById('password').value
        let selector = document.getElementById('selector');
        let status = selector.options[selector.selectedIndex].value;
        let obj = {
            login,
            password,
            status,
        }
        fetch('/main/registration',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                
              },
              body: JSON.stringify(obj)
        }).then(res=> {
            console.log(res)
           return res.json();
        }).then(answer=>{
            if(answer){
                alert('DONE');
                window.location.href = '/main/autorization';
            }
            else{
                alert('Not correct');
            }
        }).catch(err=>{
            console.log(err);
            alert('We have error with server')
        })
}