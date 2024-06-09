var logOutBtn = document.getElementById("logOutBtn")
var username = document.getElementById("username")
document.getElementById("username").innerHTML=name

logOutBtn.addEventListener("click",function(){
    logout()
})
function logout(){
    localStorage.removeItem("sessionUsername")
    window.location="./index.html"
    
}
