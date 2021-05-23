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

        createMainInfo(response.person[0]);
        hid();
        createCardCountry(response.countrys);
    }).then(()=>{
        fetch('/admin/getenable',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({person_id:id})
        }).then(response=>{
                return response.json();
        }).then(data=>{
            
            hid();
            let countryAdd = document.getElementById('countryAddselector');
            countryAdd.append(createSelector(data,'addTravel')); 
        }).catch(err=>{console.error(err)})
    }).then(()=>{
        fetch('/admin/getenable',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({person_id:id})
        }).then(response=>{
            return response.json();
        }).then(data=>{
           
            visible();
            let countryblock = document.getElementById('countryBlock');
            countryblock.append(createSelector(data,'blockBountry'));
        }).catch(err=>{
            console.error(err);
        })
    }).then(()=>{
        fetch('/admin/getdisable',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({person_id:id})
        }).then(response=>{
            return response.json();
        }).then(data=>{
            hid();
            createDisableCard(data);
        }).catch(err=>{
            console.error(err);
        })
    })
    .catch(err=>{console.error(err)})
})


const createDisableCard = (country)=>{
    let card = document.getElementById('countryDisable');
    if(country.length==0){
        let element = document.createElement('p');
        element.className = 'card-title';
        element.textContent = `No coutrys`;
        card.append(element);
    }
    for(let i = 0;i<country.length;i++){
        let element = document.createElement('p');
            element.className = 'card-title';
            element.textContent = `${country[i].name}`
            card.append(element);
    }
}

const createMainInfo = (person) =>{
    let card = document.getElementById('personInfo');
    for (const key in person) {
        if(key !== 'id_person'){
            let element = document.createElement('p');
            element.className = 'card-title';
            element.textContent = `${key.slice(0,1).toLocaleUpperCase()}${key.slice(1)} - ${person[key]}`
            card.append(element);
        }
    }
}

const createCardCountry = (countrys) =>{
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


const hid = () =>{
    let array_div = ['visibleAdd','visibleblock','countryInfo','disable'];
    for(let i = 0;i<array_div.length;i++){
            let country = document.getElementById(array_div[i]);
            country.hidden =  true
    }
}

const visible  = (parametrs) =>{
    let array_div = ['visibleAdd','visibleblock','countryInfo','disable'];
    for(let i = 0;i<array_div.length;i++){
        if(parametrs == array_div[i]){
            let country = document.getElementById(array_div[i]);
            country.hidden =  false
        }
        else{
            let country = document.getElementById(array_div[i]);
            country.hidden =  true;
        }
    }
     
}

document.getElementById('addtr').addEventListener('click',()=>{
    visible('visibleAdd');
});
document.getElementById('addbl').addEventListener('click',()=>{
    visible('visibleblock')
});
document.getElementById('tr').addEventListener('click',()=>{
    visible('countryInfo');
})
document.getElementById('dis').addEventListener('click',()=>{
    visible('disable');
})


const Save = (parametrs,callback) =>{
    let selector = document.getElementById(parametrs);
    let value = selector.options[selector.selectedIndex].value;
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
        
        response('/admin/addTravel',obj);
    });
})
document.getElementById('blockTravel').addEventListener('click',()=>{
    Save('blockBountry',(index)=>{
        let obj  = {}
        obj['country_id'] = index;
        obj['person_id'] = document.getElementById('id').value; 
        obj['status']  = 'block';
      
        response('/admin/blockCountry',obj);
    });
})