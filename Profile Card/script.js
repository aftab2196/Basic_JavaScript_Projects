let genrateBtn = document.querySelector("button");
let input = document.querySelector("input");
let body = document.querySelector("body");
let Full_name= document.getElementById("name");
let Email=document.getElementById("email");
let Birth=document.getElementById("birth-date");
let Phone=document.getElementById("Phone");
let Occupation= document.getElementById("Occupation");
let container = document.getElementById("profile-card");

genrateBtn.addEventListener("click",function(){
container.innerHTML = ` 
        <div id="profile-card">
        <div id="user-img"></div>
        <h1>${Full_name.value}</h1>
        <h3>${Occupation.value}</h3>
        <h3>Date Of Birth: ${Birth.value}</h3>
        <h3>Email: ${Email.value}</h3>
        <h3>Phone Number:${Phone.value}</h3>
    </div> 
    `
})