document.addEventListener('DOMContentLoaded',(event)=>{
    let cookie = document.cookie;
    let status = cookie.split('=')[1];
    if(status=='admin'){
        responseAdmin();
    }
    else{
        responseUser();
    }
})

const responseAdmin = () =>{
    fetch('/admin/allPeople').then(response=>{
        return response.json();
    }).then(user=>{
        createTableAdmin(user);
    });
}

const responseUser=()=>{
    fetch('/admin/allPeople').then(response=>{
        return response.json();
    }).then(user=>{
        createTableUser(user);
    });
}

const createLinkAdmin =()=>{

}

const createTableUser = (array) =>{
    let table = document.getElementById('table')
    let thead = document.createElement('thead');
    let tr = document.createElement('tr');
    let th1 = document.createElement('th');
    let th2 = document.createElement('th');
    let th3 = document.createElement('th');
    
    th1.scope = 'col'
    th1.textContent = 'Name'
    th2.scope = 'col'
    th2.textContent = 'Surname'
    th3.scope = 'col'
    th3.textContent = 'Nationality'

    tr.append(th1);
    tr.append(th2);
    tr.append(th3);

    thead.append(tr);
    table.append(thead);
    let tbody = document.createElement('tbody');
    for(let i=0;i<array.length;i++){
        let trb = document.createElement('tr');
        trb.className = 'table-dark';
        let thb1 = document.createElement('td');
        thb1.scope = 'row'
        thb1.textContent = array[i].name;
        let tdb1 = document.createElement('td');
        tdb1.textContent = array[i].surname;
        let tdb2 = document.createElement('td');
        tdb2.textContent = array[i].nationality;
        trb.append(thb1);
        trb.append(tdb1);
        trb.append(tdb2);
        tbody.append(trb);
    }
    table.append(tbody);
}

const createTableAdmin = (array) =>{
        let table = document.getElementById('table')
        let thead = document.createElement('thead');
        let tr = document.createElement('tr');
        let th1 = document.createElement('th');
        let th2 = document.createElement('th');
        let th3 = document.createElement('th');
        let th4 = document.createElement('th');
        th1.scope = 'col'
        th1.textContent = 'Name'
        th2.scope = 'col'
        th2.textContent = 'Surname'
        th3.scope = 'col'
        th3.textContent = 'Nationality'
        th4.scope = 'col' 
        th4.textContent = 'Option'
        tr.append(th1);
        tr.append(th2);
        tr.append(th3);
        tr.append(th4);
        thead.append(tr);
        table.append(thead);
        let tbody = document.createElement('tbody');
        for(let i=0;i<array.length;i++){
            let trb = document.createElement('tr');
            trb.className = 'table-dark';
            let thb1 = document.createElement('td');
            thb1.scope = 'row'
            thb1.textContent = array[i].name;
            let tdb1 = document.createElement('td');
            tdb1.textContent = array[i].surname;
            let tdb2 = document.createElement('td');
            tdb2.textContent = array[i].nationality;
            let tdb3 = document.createElement('td');
            let buttonInfo = document.createElement('button');
            buttonInfo.type = 'button';
            buttonInfo.className = 'btn btn-success';
            buttonInfo.style.marginRight = '5px';
            buttonInfo.textContent = 'Information';
            buttonInfo.addEventListener('click',()=>{
                Information(array[i].id_person);
            })
            let buttonRemove = document.createElement('button');
            buttonRemove.type = 'button';
            buttonRemove.className = 'btn btn-danger';
            buttonRemove.textContent = 'Remove';
            buttonRemove.addEventListener('click',()=>{
                Remove(array[i].id_person);
            })
            tdb3.append(buttonInfo);
            tdb3.append(buttonRemove);
            trb.append(thb1);
            trb.append(tdb1);
            trb.append(tdb2);
            trb.append(tdb3);
            tbody.append(trb);
        }
        table.append(tbody);
}


const Remove = (id) =>{
    console.log(id);
}
const Information = (id) =>{
    console.log(id);
}