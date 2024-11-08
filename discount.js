function discount(percent) {
  return function (price) {
    return price - (price * percent) / 100;
  };
}

const discount10 = discount(10);
console.log("Discount price:", discount10(1000));
