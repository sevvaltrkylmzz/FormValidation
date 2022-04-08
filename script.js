const username = document.getElementById('username')
const surname = document.getElementById('surname')
const mail = document.getElementById('mail')
const birthdate = document.getElementById('birthdate')
const number = document.getElementById('telephonenumber')
const password = document.getElementById('password')
const errorElement = document.getElementById('error')
const form = document.getElementById('form')

form.addEventListener('submit',(e)=>{
   let messages=[]
   if(username.value===''|| username.value==null){
      messages.push('Name is required')
       alert("Name cannot be blank")
   }
   if(surname.value===''|| surname.value==null){
    messages.push('Surname is required')
     alert("Name cannot be blank")
 }
 if(birthdate.value===''|| birthdate.value==null){
    messages.push('Birth date is required')
     alert("Name cannot be blank")
 }
 if(mail.value===''|| mail.value==null){
    messages.push('Email is required')
     
 }
 
   if (password.value.length < 6) {
    messages.push("Your password must be at least 6 characters"); 
}
if (password.value.length > 15) {
    messages.push("Your password must be at most 15 characters"); 
}
if (password.value.search(/[a-z]/i) < 0) {
    messages.push("Your password must contain at least one letter.");
}
if (password.value.search(/[0-9]/) < 0) {
    messages.push("Your password must contain at least one digit."); 
}
if (password.value.search[/A-Z/i] < 0) {
    alert("Your password needs at least one upper case letter")
}
   if(messages.length>0){
    e.preventDefault()
errorElement.innerText= messages.join(', ')
}
    
})

form.addEventListener('submit',(e)=>
{
    e.preventDefault();
}
)
function checkInputs(){
  username;
  surname;
  mail;
  birthdate;
  telephonenumber;
  password;

}