---
sidebar_position: 2
---


 


## Codigos en Javascript

![JavaScript](./img/JS.png)

 

---

### Funciónes
:::caution 

```javascript
/* Declarando la función 'myFunc' */
function myFunc(elobjeto) {
  elobjeto.marca = "Toyota";
}

/*
 * Declarando la variable 'mycar';
 * Se crea e inicializa el nuevo objeto;
 * para hacer referencia a él mediante 'mycar'
 */
let mycar = {
  marca: "Honda",
  modelo: "Accord",
  año: 1998,
};

/* Mostrando 'Honda' */
window.alert(mycar.marca);

/* Paso por referencia del objeto 'mycar' a la función 'myFunc'*/
myFunc(mycar);

/*
 * Muestra 'Toyota' como valor de la propiedad 'marca'
 * del objeto, que ha sido cambiado por la función.
 */
window.alert(mycar.marca);

---------------------------------

// Función tradicional (con argumentos)

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let value = toCelsius(77);

console.log(value);
```
:::


 ###  Funciones anidadas:
:::caution 

```javascript
//El ejemplo siguiente muestra Funciones anidadas:

function addCuadrado(a, b) {
  function cuadrado(x) {
    return x * x;
  }
  return cuadrado(a) + cuadrado(b);
}
a = addCuadrado(2, 3); // retorna 13
b = addCuadrado(3, 4); // retorna 25
c = addCuadrado(4, 5); // retorna 41
```
:::

---

### Funciones Flecha

:::caution 
```javascript
// Función tradicional
function (a, b){
  return a + b + 100;
}

// Función flecha
(a, b) => a + b + 100;
---------------------------------
// Función tradicional (sin argumentos)
let a = 4;
let b = 2;
function (){
  return a + b + 100;
}

// Función flecha (sin argumentos)
let a = 4;
let b = 2;
() => a + b + 100;

---------------------------------
// Función flecha (con argumentos)
let myFunction = (a, b) => a * b;

let result = myFunction(5,7)
console.log(result) // imprime en consola 35.
```
:::

---

### JavaScript Condicionales
:::caution  SINTAXIS

```javascript

//The if Statement
if (condition) {
  //  block of code to be executed if the condition is true
}


if (hour < 18) {
  greeting = "Good day";
}
---------------------------- 
//The else Statement

if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}


if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
------------------------------- 
//The else if Statement

if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}


if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

--------------------------------- 

//The JavaScript Switch Statement

switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}

let day = new Date().getDay();

switch (day) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
---------------------------------

The result of day will be:

Wednesday
```
:::

---
### JavaScript Bucles


 

:::caution 
```javascript
//The For Loop
for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}

---------------------------------

//The For In Loop
const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  text += person[x];
}

---------------------------------

//The For Of Loop

const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x;
}

---------------------------------

//The While Loop

while (i < 10) {
  text += "The number is " + i;
  i++;
}

---------------------------------

//The Do While Loop

do {
  text += "The number is " + i;
  i++;
}
while (i < 10);
```
:::