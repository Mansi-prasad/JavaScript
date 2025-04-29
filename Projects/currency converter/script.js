// const baseUrl="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";

const baseUrl =
  // "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
  "https://currency-rate-exchange-api.onrender.com";
const dropdowns = document.querySelectorAll(".dropdowns Select");
const btn = document.querySelector(".btn");
const fromCurr = document.querySelector("#from");
const toCurr = document.querySelector("#to");
const msg = document.getElementById("msg");
const errorMsg = document.getElementById("errMsg");
async function getData() {
  let amt = document.querySelector(".amount input");
  let amtVal = amt.value;
  if (amtVal === "" || amtVal < 0) {
    amtVal = 1;
    amount.value = "0";
  }
  const url = `${baseUrl}/${fromCurr.value.toLowerCase()}`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      errorMsg.innerText = `${fromCurr.value} currreny not Found.`;
      throw new Error(`res status: ${res.status}`);
    }
    errorMsg.innerText = "";
    const json = await res.json();
    console.log(json);

    const rates = json.rates[fromCurr.value.toLowerCase()];
    console.log("rates", rates);
    let convertedAmt =
      Number(amtVal) * Number(rates[toCurr.value.toLowerCase()]);
    console.log(convertedAmt);
    msg.innerHTML = convertedAmt;
  } catch (error) {
    console.error(error.message);
  }
}

for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "From" && currCode === "INR") {
      newOption.selected = "selected";
    } else if (select.name === "To" && currCode === "USD") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }
  select.addEventListener("change", (evt) => {
    update_flag(evt.target);
  });
}
const update_flag = (element) => {
  let currCode = element.value;
  let countrycode = countryList[currCode]; //IN EU
  let newSrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};
btn.addEventListener("click", (evt) => {
  evt.preventDefault(); //prevent all the behaviour that gets change after the button clicked, like refresh page etc...
  getData();
});
