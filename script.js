const colorBtnsEl = document.querySelectorAll("input[name='color']")
const bodyEl = document.querySelector("body")

colorBtnsEl.forEach((btn) => {btn.addEventListener("change", () => bodyEl.style.backgroundColor = btn.value)})

//

const nameEl = document.getElementById("name-input")
const h1El = document.querySelector("h1")
nameEl.addEventListener("input", () =>
     {h1El.textContent = nameEl.value
    if (nameEl.value == "") {
        h1El.textContent = "незнайомець"

    }
})
