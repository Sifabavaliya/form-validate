const form = document.getElementById("FormValidation");
const table = document.getElementsByClassName("Display-info");
const tableBody = document.getElementById("tBody");

// date picker
$(document).ready(function () {
  $("#dob").datepicker({
    dateFormat: "dd-mm-yy",
  });
});

form.addEventListener("submit", (e) => {
  const firstName = document.getElementById("first_name").value;
  const lastName = document.getElementById("last_name").value;
  const dob = document.getElementById("dob").value;
  const university = document.getElementById("university").value;
  const gender = document.querySelector('input[name="Gender"]:checked');
  const emailId = document.getElementById("email_id").value;
  const mobileNumber = document.getElementById("mobile_no").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm_password").value;
  const fevFood = document.querySelectorAll('input[type="checkbox"]:checked');
  const msg = document.getElementById("msg").value;

  let isValid = true;

  // first name validate
  if (firstName === "" || firstName === null) {
    document.getElementById("first_name_errormsg").innerHTML =
      "*Pls Enter First Name";
    isValid = false;
    e.preventDefault();
  } else if (!isNaN(firstName)) {
    document.getElementById("first_name_errormsg").innerHTML =
      "*Pls Enter Valid Name";
    isValid = false;
    e.preventDefault();
  } else {
    document.getElementById("first_name_errormsg").innerHTML = "";
  }

  // Last name validate
  if (lastName === "" || lastName === null) {
    document.getElementById("last_name_errormsg").innerHTML =
      "*pls Enter Last Name";
    isValid = false;
    e.preventDefault();
  } else if (!isNaN(lastName)) {
    document.getElementById("last_name_errormsg").innerHTML =
      "*Enter Valid Name";
    isValid = false;
    e.preventDefault();
  } else {
    document.getElementById("last_name_errormsg").innerHTML = "";
  }

  // date of birth
  if (dob === "" || dob === null) {
    document.getElementById("dob_errormsg").innerHTML =
      "*pls Enter Date of Birth";
    isValid = false;
    e.preventDefault();
  } else {
    document.getElementById("dob_errormsg").innerHTML = "";
  }

  // Select Uni
  if (university === "") {
    document.getElementById("university_errormsg").innerHTML =
      "*Pls Select University";
    isValid = false;
    e.preventDefault();
  } else {
    document.getElementById("university_errormsg").innerHTML = "";
  }

  // Gender validate
  if (gender === null) {
    document.getElementById("gender_errormsg").innerHTML = "*Pls Select Gender";
    isValid = false;
    e.preventDefault();
  } else {
    document.getElementById("gender_errormsg").innerHTML = "";
  }

  // mobile no validate
  if (mobileNumber === "" || mobileNumber === null) {
    document.getElementById("mobile_no_errormsg").innerHTML =
      "*pls Enter Mobile No";
    isValid = false;
    e.preventDefault();
  } else if (isNaN(mobileNumber)) {
    document.getElementById("mobile_no_errormsg").innerHTML =
      "*Pls Enter Valid Number";
    isValid = false;
    e.preventDefault();
  } else if (mobileNumber.length < 10 || mobileNumber.length > 10) {
    document.getElementById("mobile_no_errormsg").innerHTML =
      "*Pls Enter 10 Digits";
    isValid = false;
    e.preventDefault();
  } else {
    document.getElementById("mobile_no_errormsg").innerHTML = "";
  }

  // email-id validate
  if (emailId === "" || emailId === null) {
    document.getElementById("email_id_errormsg").innerHTML =
      "*Pls Enter Email Id";
    isValid = false;
    e.preventDefault();
  } else if (emailId.indexOf("@") === -1 || emailId.indexOf(".") === -1) {
    document.getElementById("email_id_errormsg").innerHTML =
      "*Pls Enter Valid Email-Id";
    isValid = false;
    e.preventDefault();
  } else {
    document.getElementById("email_id_errormsg").innerHTML = "";
  }

  // password validate
  if (password === "" || password === null) {
    document.getElementById("password_errormsg").innerHTML =
      "*Pls Enter Password";
    isValid = false;
    e.preventDefault();
  } else if (password.length < 8) {
    document.getElementById("password_errormsg").innerHTML =
      "*Pls Enter Minimum 8 Character";
    isValid = false;
    e.preventDefault();
  } else {
    document.getElementById("password_errormsg").innerHTML = "";
  }

  // confirm password validate
  if (confirmPassword === "" || confirmPassword === null) {
    document.getElementById("confirm_password_errormsg").innerHTML =
      "*Pls Enter Confirm Password";
    isValid = false;
    e.preventDefault();
  } else if (password !== confirmPassword) {
    document.getElementById("confirm_password_errormsg").innerHTML =
      "*Pls Enter Same Password";
    isValid = false;
    e.preventDefault();
  } else {
    document.getElementById("confirm_password_errormsg").innerHTML = "";
  }

  // favriout food validate
  let favFoodItems = [];
  fevFood.forEach((checkbox) => {
    ischecked = true;
    favFoodItems.push(checkbox.value);
  });
  if (fevFood.length === 0) {
    document.getElementById("food_errormsg").innerHTML =
      "*Pls Select Favriout Food";
    isValid = false;
    e.preventDefault();
  } else {
    document.getElementById("food_errormsg").innerHTML = "";
  }

  // msg validate
  if (msg === "") {
    document.getElementById("msg_errormsg").innerHTML =
      "*Pls Enter Your Massage";
    isValid = false;
    e.preventDefault();
  } else {
    document.getElementById("msg_errormsg").innerHTML = "";
  }
});
