var nameInput = document.getElementById("name")
var emailInput = document.getElementById("email")
var passwordInput = document.getElementById("password")
var signupBtn = document.getElementById("signupBtn")
var message = document.getElementById("message")
var nameValue
var emailValue
var passValue
// users container from localStorage 
users=[];
if(localStorage.getItem("users")!=null){
    users=JSON.parse(localStorage.getItem("users"))

}

// start signup function 
signupBtn.addEventListener("click",function(){
    signup()
})
function signup(){
    nameValue = nameInput.value
     emailValue = emailInput.value
     passValue = passwordInput.value
   if(validateEmptyInputs()==true){
    document.getElementById("message").innerHTML=`<span class="text-danger my-3">All inputs is required</span>`
   }
    else if(search()==true){
        document.getElementById("message").innerHTML=`<span class="text-danger  my-3">email already exists
        </span>`
    }
    else if(validateEmail()==false){
    document.getElementById("message").innerHTML=`<span class="text-danger  my-3">Enter Valid Email </span>`
        
    }
    else{
        user={
            name:nameValue,
            email:emailValue,
            password:passValue,
        }
        users.push(user)
        localStorage.setItem("users",JSON.stringify(users))
        document.getElementById("message").innerHTML=`<span class="text-success  my-3">success </span>`
        
    }
    
}
// search email function 
function search(){
for(var i=0 ;i<users.length ;  i++){
    if(emailValue==users[i].email){
        
        return true
        
    }
}
}
function validateEmptyInputs(){
    if(nameValue.length==0 || emailValue.length==0 || passValue.length==0){
    return true
    }
}
function validateEmail(){
var valid = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+[.][A-Za-z]{2,4}$/.test(emailValue)
if(valid){
        return true
    }
}
// end signup function 
