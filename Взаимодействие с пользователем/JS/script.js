"use strict";

//alert('Hello');  // Модальное окно

//const result = confirm('Are you hehe???'); // Вопросы типа "да"/"нет"
//console.log(result);

//const answer = +prompt('enter a number'); // просьба совершить действие (ввести что либо)
//alert(answer); // с помощью оператора "+" преобразовываем тип данных в числовой
//console.log(typeof (answer)); // выводим в консоль тип данных введённых пользователем


const answers = [];

answers[0] = prompt('Как вас зовут?', '');
answers[1] = prompt('Какая ваша фамилия?', '');
answers[2] = prompt('Сколько вам лет?', '');

document.write(answers);