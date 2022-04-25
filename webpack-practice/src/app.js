const { name } = require("./monkey.js");
const monkey = require("./monkey.js");
require("./css/main.css")

const components = () => {
  const h1 = document.createElement("h1");
  h1.innerText = "hello webpack";
  return h1;
}
const component = () => {
  const div = document.createElement("div");
  div.innerText = `hello my name is ${name}`;
  return div
}

monkey.food.forEach(f => {
  console.log(f)
})


document.body.appendChild(components())
document.body.appendChild(component())