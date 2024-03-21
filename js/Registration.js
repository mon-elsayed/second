const container = document.getElementById('container');
let register=document.getElementById("sig")
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
let userinfo= document.getElementById('userInfo');
let login=document.getElementById('L')
let signup= document.getElementById('Signupbtn');
//////////////////////////////////////////////////////////
let username= document.getElementById('username');
let email= document.getElementById('email');
let password= document.getElementById('password');
let phone= document.getElementById('phoneNum');
////////////////////////////////////////////////////////////
let em= document.getElementById('em');
let pass= document.getElementById('pass');
let signINBtn=document.getElementById('signINBtn')
let LoginDiv=document.getElementById('sign')

////////////////////////////////////////////////////////////////


registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});
signup.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
signINBtn.addEventListener('click', function(e) {
    e.preventDefault()
    window.location.href = "index.html";
                
            
            // userinfo.style.display = 'block';
 

});
// register.addEventListener('click', () => {
//     setTimeout(()=>{
//                window.location="regisraion.html"
                 
//              },500)
//     container.classList.remove("active");
// });













// signup.addEventListener('click', function(e) {
//     e.preventDefault()
// if( username.value!==""&&email.value!==""&& password.value!==""&&phone.value!==""){
//     localStorage.setItem("username",username.value)
//     localStorage.setItem("email",email.value)
//     localStorage.setItem("password",password.value)
//     localStorage.setItem("phoneNumb",phone.value)

//     setTimeout(()=>{
//         window.location="index.html"
         
//     },500)
// }
// });
// if(localStorage.getItem("username")){
//     login.remove()
//     userinfo.style.display="block";
//     userinfo.innerHTML="eman"
// }

//  document.getElementById('userInfo').style.display = 'block';
//      window.location.href = 'index.html';
//      document.getElementById('username').textContent = username;
















    // document.getElementById('userInfo').style.display = 'block';
    // window.location.href = 'home';
    // document.getElementById('username').textContent = username;
   

let GetEmail=localStorage.getItem("email")
let Getpassword=localStorage.getItem("password")
let GetUserName=localStorage.getItem("username")
//////////////////////////////////////////////////////
// signINBtn.addEventListener('click', function(e) {
//     e.preventDefault()
// if( em.value!==""&& pass.value!==""){
    
// if( GetEmail&&GetEmail.trim()===em.value&&Getpassword&&Getpassword.trim()===pass.value){

//     setTimeout(()=>{
//         window.location="index.html"
         
//     },500)
// }
// else
// alert("email or password wrong")

// }

// );
/////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
