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
        fetch('/admin/allCountry').then(response=>{
                return response.json();
        }).then(data=>{
            visible('visibleAdd');
            visible('visibleblock');
            let countryAdd = document.getElementById('countryAddselector');
            countryAdd.append(createSelector(data,'addTravel'));
            let countryblock = document.getElementById('countryBlock');
            countryblock.append(createSelector(data,'blockBountry'));
        })
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

const createSelector = (countrys,parametrs) =>{
    let selector = document.createElement('select');
    selector.className = 'form-select';
    selector.id = parametrs;
    countrys.forEach(element => {
        let option= document.createElement('option');
        option.value  = element.id_country;
        option.textContent = element.name;
        selector.append(option);
    });
    return selector;
};

const visible  = (parametrs) =>{
    let country = document.getElementById(parametrs);
    country.hidden = country.hidden == true ? false :true; 
}

document.getElementById('addtr').addEventListener('click',()=>{
    visible('visibleAdd');
});
document.getElementById('addbl').addEventListener('click',()=>{
    visible('visibleblock')
});


const Save = (parametrs,callback) =>{
    let selector = document.getElementById(parametrs);
    let value = selector.options[selector.selectedIndex].value;
    console.log(value);
    callback(value);
}

const response = (url,body) =>{
    fetch(url,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(body),
    }).then(data=>{
        alert('DONE');
        window.location.href = `/page/infoPerson/${document.getElementById('id').value}`
    }).catch(err=>{
        alert('err');
    })
}

document.getElementById('saveTravel').addEventListener('click',()=>{
    Save('addTravel',(index)=>{
        let date = document.getElementById('date_travel').value;
        let obj = {}
        obj['country_id'] = index;
        obj['date'] = date;
        obj['peron_id'] = document.getElementById('id').value; 
        console.log(obj)
        response('/admin/addTravel',obj);
    });
})
document.getElementById('blockTravel').addEventListener('click',()=>{
    Save('blockBountry',(index)=>{
        let obj  = {}
        obj['country_id'] = index;
        obj['person_id'] = document.getElementById('id').value; 
        obj['status']  = 'block';
        console.log(obj) 
        response('/admin/blockCountry',obj);
    });
})