// Problema 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)  // Sera el primer indice [0] 'Tesla'
console.log(otherRandomCar) // Sera el indice [1]'Mercedes' ya que la coma recorrio un elemento del array;


// Problema 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name); // no existe alguna variable definida en ese ambito llamada name, solo propiedad de un objeto employee
console.log(otherName); // Dara el nombre de 'Elon'


//Problema 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); // La salida sera '12345'
console.log(hashedPassword); // 'undefined' No existe una propiedad password en el objeto person error


//Problema 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; //2
const [,,,second] = numbers; //5
const [,,,,,,,,third] = numbers;// 2
//Predict the output
console.log(first == second); // false
console.log(first == third); // true



// Problema5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key); // la salida sera 'value'
console.log(secondKey); // la salida sera el array [1,5,1,8,3,3]
console.log(secondKey[0]); // la salida sera 1 indice[0] (metodo convencional antes de ES6)
console.log(willThisWork); //la salida sera 5 el indice[1] (se desestructura un array)



