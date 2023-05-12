const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");
const btn = document.getElementById("btn")

btn.addEventListener("click", (event) => {
  event.preventDefault();
  Validite();
});
const sendData = (usernameVal, sRate, count) => {
  if (sRate === count) {
     alert("Registration Successful");
     swal("Good job!", "Registration Successful!", "success");  

    location.href = `demo.html?username=${usernameVal}`
  }
};

const successMsg = (usernameVal) => {
  let formCom = document.getElementsByClassName("form-control");
  let count = formCom.length - 1;
  for (i = 0; i < formCom.length; i++) {
    if (formCom[i].className === "form-control success") {
      var sRate = 0 + i;
      console.log(sRate);
      sendData(usernameVal, sRate, count);
    } else {
      return false;
    }
  }
};

const isEmail = (emailVal) => {
  var atSymbol = emailVal.indexOf("@");
  if (atSymbol < 1) return false;
  var dot = emailVal.lastIndexOf(".");
  if (dot <= atSymbol + 5) return false;
  if (dot === emailVal.length - 1) return false;
  return true;
};

const Validite = () => {
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const phoneVal = phone.value.trim();
  const passwordVal = password.value.trim();
  const cpasswordVal = cpassword.value.trim();
  //validate your username//
  if (usernameVal === "") {
    setErrormsg(username, "username cannot be Empty");
  } else if (usernameVal.length <= 3) {
    setErrormsg(username, "username min 5 char");
  } else {
    setSuccessMsg(username);
  }
  //validate your email//
  if (emailVal === "") {
    setErrormsg(email, "Email cannot be Empty");
  } else if (!isEmail(emailVal)) {
    setErrormsg(email, "Not a Valid Email");
  } else {
    setSuccessMsg(email);
  }
  if (phoneVal === "") {
    setErrormsg(phone, "Phone Number cannot be Empty");
  } else if (phoneVal.length != 11) {
    setErrormsg(phone, "Not a Valid Phone Number");
  } else {
    setSuccessMsg(phone);
  }
  if (passwordVal === "") {
    setErrormsg(password, "Password cannot be Empty");
  } else if (passwordVal.length <= 6) {
    setErrormsg(password, "Password min 6 char");
  } else {
    setSuccessMsg(password);
  }
  if (cpasswordVal === "") {
    setErrormsg(cpassword, "Password cannot be Empty");
  } else if (passwordVal !== cpasswordVal) {
    setErrormsg(cpassword, "Password Does'not Match");
  } else {
    setSuccessMsg(cpassword);
  }
  successMsg(usernameVal);
};
const setErrormsg = (input, errormsgs) => {
  let formControl = input.parentElement;
  let small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = errormsgs;
};
const setSuccessMsg = (input) => {
  let formControl = input.parentElement;
  formControl.className = "form-control success";
};
