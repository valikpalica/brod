
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
        let array_year = [];
        let array_count = [];
        for(let i=0;i<country.length;i++){
            array_year.push(country[i].year);
            array_count.push(country[i].count_travel);
        }
        convasGraphic(array_year,array_count);
    }).catch(err=>{console.log(err)})
})

const convasGraphic = (array_year,array_count) =>{
    let ctx = document.getElementById('myChart').getContext('2d');
    const data = {
        labels:array_year,
        datasets: [
          {
            label: 'Travel',
            data: array_count,
            borderColor: '#448AFF',
            backgroundColor: '#448AFF'
          }
        ]
      };
    let myChart = new Chart(ctx,{
        type:'bar',
        data:data,
        options:{}
    });
}