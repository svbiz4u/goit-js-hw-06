class StringBuilder  {
    #value;
  constructor(initialValue) {
    this.#value = initialValue;
     }  

getValue() {
return this.#value;
} // — повертає поточне значення приватної властивості value.

padEnd(str) {
    this.#value += str;   // Метод для додавання рядка в кінець
    // this.#value.push(str);
} //  — отримує параметр str (рядок) і додає його в кінець значення приватної властивості value об'єкта, який викликає цей метод.

padStart(str) {
    this.#value = str + this.#value;   // Метод для додавання рядка на початок
// this.#value.unshift(str)
} // — отримує параметр str (рядок) і додає його на початок значення приватної властивості value об'єкта, який викликає цей метод.

padBoth(str) {
    this.#value = str + this.#value + str;   // Метод для додавання рядка на початок і в кінець
    // this.#value.push(str)
    // this.#value.unshift(str)
} //  — отримує параметр str (рядок) і додає його на початок і в кінець значення приватної властивості value об'єкта, який викликає цей метод.
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
