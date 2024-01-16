const basket = {
  bread: 4,
  milk: 6,
  popato: 20,
  chocolate: 2,
};
// val >= 5
console.log(_.pickBy(basket, (val) => _.gte(val, 5))); // {milk: 6, popato: 20}
