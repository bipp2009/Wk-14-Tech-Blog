
const signUpUser = async function (e) {
  e.preventDefault();
  const newUserEmail = document.querySelector("#exampleInputEmail1").value;
    const username = document.querySelector("#exampleInputUsername").value
const password = document.querySelector("#exampleInputPassword1").value
  console.log("Sign Up Clicked");
  console.log("Email:", newUserEmail);
  console.log("Username: ", username);
  console.log("Password: ", password)

  const response = await fetch('/api/user', {
    method: 'POST',
body: JSON.stringify({
  email: newUserEmail,
  name: username,
  password: password

}),
headers: { 'Content-Type': 'application/json'}
  })
console.log(response)
  if(response.ok) {
    console.log('Signed up and redirecting')
    document.location.replace('/dashboard');
  } else {
    alert("Failed to sign up new user")
  }
};

document.querySelector("#sign-up").addEventListener("submit", signUpUser);
