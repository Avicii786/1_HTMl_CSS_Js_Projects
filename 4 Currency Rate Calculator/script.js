// Get dom Elements
const currencyOne = document.getElementById("currency-one");
const amountCurrencyOne = document.getElementById("amount-one");
const currencyTwo = document.getElementById("currency-two");
const amountCurrencyTwo = document.getElementById("amount-two");

const rate = document.getElementById("rate");
const swap = document.getElementById("swap");

// Get Exchange rates and update the DOM
function calculate() {
  const currencyOneCode = currencyOne.value;
  const currencyTwoCode = currencyTwo.value;

  // Fetch exchange rates and update the DOM
  fetch(
    `https://v6.exchangerate-api.com/v6/63da2574179e554601e5f85a/pair/${currencyOneCode}/${currencyTwoCode}`
  )
    .then((res) => res.json())
    .then((data) => {
      // Get the conversion rates from the currency one and two
      const conversionRate = data.conversion_rate.toFixed(2);
      // Update the DOM
      rate.innerText = `1 ${currencyOneCode} = ${conversionRate} ${currencyTwoCode}`;

      // update the currency two amount
      amountCurrencyTwo.value = (
        amountCurrencyOne.value * conversionRate
      ).toFixed(2);
    });
}

// Event Listeners
currencyOne.addEventListener("change", calculate);
amountCurrencyOne.addEventListener("input", calculate);
currencyTwo.addEventListener("change", calculate);
amountCurrencyTwo.addEventListener("input", calculate);
swap.addEventListener("click", () => {
  const temp = currencyOne.value;
  currencyOne.value = currencyTwo.value;
  currencyTwo.value = temp;
  calculate();
});

// execute caculate function
calculate();

// Let's add today's rates panel
const ul = document.getElementById("today-rates-ul");

function todayRates() {
  fetch(
    "https://v6.exchangerate-api.com/v6/63da2574179e554601e5f85a/latest/USD"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      for (const key in data.conversion_rates) {
        const li = document.createElement("li");
        li.innerText = `${key} : ${data.conversion_rates[key]}`;
        ul.appendChild(li);
      }
    });
}

todayRates();
