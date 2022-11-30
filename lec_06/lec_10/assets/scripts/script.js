const currency = {
  dollar: {
    name: "Dólar Americano",
    symbol: "USD",
    rate: 5.2,
    img: "us"
  },
  euro: {
    name: "Euro",
    symbol: "EUR",
    rate: 5.9,
    img: "euro"
  },
  bitcoin: {
    name: "Bitcoin",
    symbol: "BTC",
    rate: 86728.85,
    img: "bitcoin"
  }
};

const button = document.querySelector("button");
const currencyTo = document.querySelector(".currency-to");
const input = document.querySelector("input");
const amounts = document.querySelectorAll(".amount");
const toP = document.querySelector(".to p");
const toImg = document.querySelector(".to img");
let conversionRate = currency[currencyTo.value];

const changeCurrency = () => {
  const value = Number(input.value);

  amounts[0].textContent = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL"
  }).format(value);
  amounts[1].textContent = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: conversionRate.symbol
  }).format(value / conversionRate.rate);
};
button.addEventListener("click", changeCurrency);

currencyTo.addEventListener("change", () => {
  conversionRate = currency[currencyTo.value];
  toImg.src = `./assets/img/${conversionRate.img}.png`;
  toP.textContent = conversionRate.name;
  changeCurrency();
});
