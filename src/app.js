/* eslint-disable */
import "bootstrap";
import "./style.css";
import validator from "validator";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function formValidation(event) {
  event.preventDefault();

  let myAlert = document.querySelector(".alert");
  let card = document.querySelector("#examplecard");
  let name = document.querySelector("#examplefirstname");
  let lastname = document.querySelector("#examplelastname");
  let cvc = document.querySelector("#examplecvc");
  let amount = document.querySelector("#exampleamount");
  let city = document.querySelector("#examplecity");

  if (validator.isEmpty(name.value)) {
    myAlert.style.display = "block";
    card.style.backgroundColor = "green";
    name.style.backgroundColor = "green";
    lastname.style.backgroundColor = "green";
    cvc.style.backgroundColor = "green";
    amount.style.backgroundColor = "green";
    city.style.backgroundColor = "green";
  } else {
    myAlert.style.display = "none";
    card.style.backgroundColor = "white";
    card.value = "";
    name.style.backgroundColor = "white";
    name.value = "";
    lastname.style.backgroundColor = "white";
    lastname.value = "";
    cvc.style.backgroundColor = "white";
    cvc.value = "";
    amount.style.backgroundColor = "white";
    amount.value = "";
    city.style.backgroundColor = "white";
    city.value = "";
  }
}
document.querySelector("form").addEventListener("submit", formValidation);
