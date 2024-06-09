var signinbtn = document.getElementById("signinbtn")
var nameInput = document.getElementById("name")
var emailInput = document.getElementById("email")
var passwordInput = document.getElementById("password")
var message = document.getElementById("error")
var nameValue
var emailValue
var passValue
var name
users=[];
if(localStorage.getItem("users")!=null){
    users=JSON.parse(localStorage.getItem("users"))

}

// start signin functions 
signinbtn.addEventListener("click",function(){
    signin()
})
function signin(){
     emailValue = emailInput.value
     passValue = passwordInput.value
     if(validateEmptyInputs()==true){
    document.getElementById("error").innerHTML=`<span class="text-danger my-3">All inputs is required</span>`
     }
     else if (searchExist()==true){
        window.location="./home.html"
        localStorage.setItem("sessionUsername",name)
     }
     else{
        
        document.getElementById("error").innerHTML=`<span class="text-danger my-3">incorrect email or password</span>`


     }
}
function searchExist(){
    for(var i=0 ;i<users.length ;  i++){
        if(emailValue==users[i].email && passValue==users[i].password){
            name=users[i].name
            return true
            
        }
    }
}
function validateEmptyInputs(){
    if(emailValue.length==0 || passValue.length==0){
    return true
    }
}
// end signin functions 


