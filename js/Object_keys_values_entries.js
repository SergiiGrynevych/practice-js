// Сумма свойств объекта
// важность: 5
// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью
// метода Object.values и цикла for..of.

// Если объект salaries пуст, то результат должен быть 0.

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

/////////////////////////  ПЕРВЫЙ ВАРИАНТ РЕШЕНИЯ /////////////////////////
// const sumSalaries = (salaries) => {
//   let result = 0;
//   for (let salary of Object.values(salaries)) {
//     result += salary;
//   }
//   return result;
// };

// alert(sumSalaries(salaries)); // 650

/////////////////////////  ВТОРОЙ ВАРИАНТ РЕШЕНИЯ /////////////////////////
const sumSalaries = (salaries) => {
  return Object.values(salaries).reduce((acc, value) => acc + value, 0);
};

// console.log(sumSalaries(salaries));

///////////////////////////////////////////////////////////////////////////
// Подсчёт количества свойств объекта
// важность: 5
// Напишите функцию count(obj), которая возвращает количество свойств объекта:
let user = {
  name: "John",
  age: 30,
};

/////////////////////////  ПЕРВЫЙ ВАРИАНТ РЕШЕНИЯ /////////////////////////
// const count = function () {
//   return Object.entries(user).length;
// };
// alert(count(user)); // 2

// /////////////////////////  ВТОРОЙ ВАРИАНТ РЕШЕНИЯ /////////////////////////
// const count = () => {
//   return Object.entries(user).length;
// };
// alert(count(user)); // 2

/////////////////////////  ТРЕТИЙ ВАРИАНТ РЕШЕНИЯ /////////////////////////
const count = () => Object.entries(user).length;
alert(count(user)); // 2
