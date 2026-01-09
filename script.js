const colorBtnsEl = document.querySelectorAll("input[name='color']");
const bodyEl = document.querySelector("body");

colorBtnsEl.forEach((btn) => {
  btn.addEventListener(
    "change",
    () => (bodyEl.style.backgroundColor = btn.value)
  );
});

//

const nameEl = document.getElementById("name-input");
const h1El = document.querySelector("h1");
nameEl.addEventListener("input", () => {
  h1El.textContent = nameEl.value;
  if (nameEl.value == "") {
    h1El.textContent = "незнайомець";
  }
});

const validEl = document.getElementById("validation-input");

validEl.addEventListener("blur", () => {
  if (validEl.value.length == validEl.dataset.length) {
    validEl.classList.add("valid");
    validEl.classList.remove("invalid");
  } else {
    validEl.classList.add("invalid");
    validEl.classList.remove("valid");
  }
});


//

const imputEl = document.querySelector("#font-size-control")
const textEl = document.querySelector("#text")

imputEl.addEventListener("input", () => {
    textEl.style.fontSize = imputEl.value + "px"
})