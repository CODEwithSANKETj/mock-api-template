const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    chk()

})
function chk(){
    fetch('https://mock-server-api-attempt-2.onrender.com/Users')
    .then(res=>res.json())
    .then(data=>{
        let flag = false
        data.forEach(element => {
            if(element.Email==email.value && element.Password==password.value){
                flag = true
            
            }
        });
        (flag)?alert('Login Successfull') : alert('Invalid Email or Password')

    })
    .catch(error=>{
        console.log(error)
    })
}

function chkAdmin(){

    if(email.value =='Admin'&&password.value=='Admin'){
        window.location.href = "/admin.html";
    }
    else{
        alert("Incorrect Details")
    }

}