const api = 'https://mock-server-api-attempt-2.onrender.com/';
const table1 = document.getElementById('table_cancled')
const table = document.getElementById('table_regestration')
const form = document.getElementById('input_user')
const users = document.getElementById('total_users')
let data_ = 0
let total_users = 0
fetch('https://mock-server-api-attempt-2.onrender.com/Users')
.then(res=>res.json())
.then(data=>{
    data_ = data
    total_users = data.length 
    users.textContent = total_users   
})

function regestration(){
    table1.style.display = 'none'
    form.style.display = 'none'
    if(table.style.display=='none'){
        table.style.display = 'block'
    }
    else{
        table.style.display = 'none'
    }
    console.log(table.style.display)
    showregestered()

}
function table_cancled(){
    table.style.display = 'none'
    form.style.display = 'none'
    if(table1.style.display=='none'){
        table1.style.display = 'block'
    }
    else{
        table1.style.display = 'none'
    }
    console.log(table1.style.display)

}
function adduser(){
    table1.style.display = 'none'
    table.style.display = 'none'
    
    if(form.style.display=='none'){
        form.style.display = 'block'
    }
    else{
        form.style.display = 'none'
    }
    console.log(form.style.display)

}

const city_link = document.getElementById('name')
const city_name = document.getElementById('address');
const city_Description = document.getElementById('age')
const city_price = document.getElementById('passengers');

const form_input = document.querySelector('form')
form_input.addEventListener('submit',function(e){
    e.preventDefault();
    addcity()
})

const reg_tobdy = document.getElementById('reg_tbody')


function showregestered(){
    reg_tobdy.innerHTML = null;
    let arr = []
    fetch(`https://mock-server-api-attempt-2.onrender.com/Users`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        arr = data
        arr.forEach((item)=>{
            const element = document.createElement('tr')
            element.innerHTML = `
            <td>${item.Name} </td>
            <td>${item.Age} </td>
            <td> ${item.Email}</td>
            <td> ${item.Bookings.length}</td>`
            reg_tobdy.append(element)
        })
    })
    .catch(error=>console.log(error))
    
}


function addcity(){
    fetch(`${api}/cities`,{
        method:'POST',
        body:JSON.stringify({
            "id": data_.length+1,
            "image" : city_link.value,
            "place" : city_name.value,
            "desc" : city_Description.value,
            "price" : city_price.value
        }),
        headers :{
            "Content-type": "application/json"
        }
    })
    .then(res=> res.json())
    .then(data=>{
        console.log(data)
        form_input.reset()
    })
    .catch(error=>console.log(error))
}
fetch("https://mock-server-api-attempt-2.onrender.com/cities")
.then(res=>res.json())
.then(data=>
    data.forEach(item=>{
        console.log(item.details)
    })
    )