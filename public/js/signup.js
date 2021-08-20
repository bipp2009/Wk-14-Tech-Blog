const signUpUser = async function (e) {
  e.preventDefault();
  const newUserEmail = document.querySelector("#exampleInputEmail1").value;
    const username = document.querySelector("#exampleInputUsername").value
const password = document.querySelector("#exampleInputPassword1").value


  console.log("Sign Up Clicked");
  console.log("Email:", newUserEmail);
  console.log("Username: ", username);
  console.log("Password: ", password)
};

document.querySelector("#sign-up").addEventListener("submit", signUpUser);
