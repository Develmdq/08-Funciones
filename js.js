const sinParam = () => true;
console.log(sinParam());

const unaPromesa = async () =>
  setTimeout(() => console.log("Hola soy una promesa"), 5000);
unaPromesa();

function* generaPares() {
  let par = 0;
  while (true) {
    par += 2;
    yield par;
  }
}
const pares = generaPares();
console.log(pares.next().value);
console.log(pares.next().value);
console.log(pares.next().value);
