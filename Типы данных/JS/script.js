"use strict";

let number = 4.6; // Number

console.log(4 / 0); // Infinity
console.log('string' * 9); // NaN - not a number

const persone = 'Alex'; // String

const bool = true; // boolean (true/false)

console.log(something); // Uncaught ReferenceError: - ошибка ссылочного типа(нельзя сослаться на несуществующий объект)
//something is not defined

let und;
console.log(und); // undefined - не присвоил переменной значение

const obj = { //спец. объекты
	name: 'John',
	age: 25,
	isMarried: false
}; // Объект - то что находится внутри фигурных скобок (человек, собака, станок, машина ....)

/*console.log(obj.name);*/
console.log(obj['name']); // лучше и удобнее использовать метод № 1 - через точку

// МАССИВЫ

let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {},
	[]
]; // в массив можно помещать так же числа 1,2,3..., объекты{} и пустые массивы

console.log(arr[0]);