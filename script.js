const array = ["white", "blue", "black", "red", "green"];

for (let variable of array) {
  return variable;
}

array.forEach(function (item, index) {});

const filterArray = array.filter(function (item) {
  return item.includes("b");
});

console.log(filterArray);
