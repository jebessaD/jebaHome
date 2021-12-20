const myForm =document.querySelector(".my-form");
const email =document.querySelector("#email");
const password =document.querySelector("#password");
const c_email =document.querySelector("#c-email");
const c_password =document.querySelector("#c-password");
const confirm=document.querySelectorAll(".confirm");
const submit =document.querySelector("#submit");
const signUp =document.querySelector(".sign-up");
const login = document.querySelector(".login");
const msg = document.querySelector(".msg");
const title =document.querySelector(".title")
confirm.forEach(element => {
    element.style.display= "none";

    signUp.addEventListener("click",(e)=>{
        element.style.display= "inline";
        login.style.display ="none";
        submit.value ="sign up";  
        title.innerHTML ="sign up here"
        
        myForm.addEventListener("submit",onSubmit);
        function onSubmit(e){
            e.preventDefault();
            msg.classList.add(".msg")
        if (c_email.value ==""|| email.value ==""||c_password.value ==""|| password.value=="" ){
            msg.innerHTML ="please fill all form";

        }
        else if (c_email.value != email.value){
            msg.innerHTML ="email is not the same";
            // msg.classList.add(".msg")
        }
        else if(c_password.value != password.value){
            msg.innerHTML ="password is not the same";
            // msg.classList.add(".msg")
        }else{
            msg.remove();
        }
        
        }

    });
});

class person{
    constructor(name,age,email){
        this.fullName =name;
        this.age =age;
        this.email=email;
    }

    greeting(fullName) {
        console.log("hello "+ this.fullName );
        
    }
}
const text="<li><a href=''>BIOgraphy</a></li>"
const add = document.querySelector(".nav-bar");
add.innerHTML +=text;

const userName= document.querySelector("#userName")
const namel = userName.value;
console.log(namel);
add.innerHTML +=namel;