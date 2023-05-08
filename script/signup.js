const name_ = document.getElementById('name')
const email_ = document.getElementById('email')
const Age_ = document.getElementById('Age')
const password_ = document.getElementById('password')
const repassword_ = document.getElementById('password2')
const form = document.querySelector('form')
let data_length = 0
form.addEventListener('submit',function(e){
    e.preventDefault();
    chkunique()

    
})

function adduser(){
    fetch('https://mock-server-api-attempt-2.onrender.com/Users',{
        method : "POST",
        headers : {
            "Content-Type": "application/json"
        },
        body : JSON.stringify({
            "id" : data_length+1,
            "Name" : name_.value,
            "Email" : email_.value,
            "Age" : Age_.value,
            "Password" : password_.value, 
            "Bookings" : [],
            "Cancled" : []
        })
    }).then(alert('User Registered'))
}


function chkunique(){
    fetch('https://mock-server-api-attempt-2.onrender.com/Users')
    .then(res=>res.json())
    .then(data=>{
        data_length = data.length
        let flag = true
        
        data.forEach(item=>{
            console.log(item.Email)
            if(item.Email == email_.value){
                flag = false
                
            }
        })

       
        if(password_.value == repassword_.value && flag===true){
                adduser()
            }
        else if(flag){
            alert('Please enter the Password Correctly')
        }
        else{
            alert('Email id already exists');
        }

    })
    .catch(error=>{
        console.log(error);
    })
}