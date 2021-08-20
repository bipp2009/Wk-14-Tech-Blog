const loginUser = async function (e) {
e.preventDefault();
const email = document.querySelector("#exampleInputEmail1").value 
const password = document.querySelector("#exampleInputPassword1").value
 

console.log("email: ", email);
console.log("Password: ", password)
}
document.querySelector ("#login").addEventListener("submit", loginUser) 