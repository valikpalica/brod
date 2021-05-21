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
    }).then(response=>{
        console.log(response);
        createMainInfo(response.person[0]);
        createCardCountry(response.countrys);
    }).then(()=>{

    })
    .catch(err=>{console.log(err)})
})


const createMainInfo = (person) =>{
    let card = document.getElementById('personInfo');
    for (const key in person) {
        if(key !== 'id_person'){
            let element = document.createElement('p');
            element.className = 'card-text';
            element.textContent = `${key.slice(0,1).toLocaleUpperCase()}${key.slice(1)} - ${person[key]}`
            card.append(element);
        }
    }
}

const createCardCountry = (countrys) =>{
    console.log(countrys);
    let maindiv = document.getElementById('countryInfo');
    for(let i = 0;i<countrys.length;i++){
        let divCard = document.createElement('div');
        divCard.className = 'card text-white bg-info mb-3 grid-item';
        let head = document.createElement('div');
        head.className = 'card-header';
        head.textContent = `${countrys[i].name}`;
        let body = document.createElement('div');
        body.className = 'card-body';
        let date_info = document.createElement('h4');
        date_info.className = 'card-title';
        date_info.textContent = `${countrys[i].date_travel}`
        body.append(date_info);
        divCard.append(head);
        divCard.append(body);
        maindiv.append(divCard);
    }
} 

