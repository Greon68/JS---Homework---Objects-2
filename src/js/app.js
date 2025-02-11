// TODO: write your code here
import sum from './basic';
import orderByProps from './orderByProps';
import destructuring from './destruct'


// console.log('worked +++');
// console.log('Hello !!!');

console.log(sum([3, 17]));


// ЗАДАНИЕ №1

// const hero = {
//     name: 'мечник',
//     health: 10,
//     level: 2,
//     attack: 80,
//     defence: 40
// };

// let sortList = ['name','level'];

// ВЫзов:
// console.log(orderByProps(hero,sortList));

// ЗАДАНИЕ №2
const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      }, 
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...'
        // <- обратите внимание, описание "засекречено"
      }
    ]	
}
// Вызов
// console.log(destructuring(character));