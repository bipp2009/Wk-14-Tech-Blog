const loginUser = async function (e) {
e.preventDefault();
const email = document.querySelector("#exampleInputEmail1").value 
const password = document.querySelector("#exampleInputPassword1").value
 

console.log("email: ", email);
console.log("Password: ", password)

if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the dashboard page
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }

}
document.querySelector("#login").addEventListener("submit", loginUser)

  
  