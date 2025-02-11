'use strict';


// Вам необходимо для панели выбора варианта атаки вытащить id,
//  иконку и описание из объекта:

// const character = {
//   name: 'Лучник',
//   type: 'Bowman',
//   health: 50,
//   level: 3,
//   attack: 40,
//   defence: 10,
//   special: [
//     {
//       id: 8,
//       name: 'Двойной выстрел',
//       icon: 'http://...',
//       description: 'Двойной выстрел наносит двойной урон'
//     }, 
//     {
//       id: 9,
//       name: 'Нокаутирующий удар',
//       icon: 'http://...'
//       // <- обратите внимание, описание "засекречено"
//     }
//   ]	
// }

// Но для некоторых (ещё недоступных) атак описание является засекреченным и не отображается:

// {
//   id: 9,
//   name: 'Нокаутирующий удар',
//   icon: 'http://...'
// }

// Напишите функцию с аргументом-деструктором, которая
//  извлекает массив с нужными полями (id, name, description, icon) 
//  из объекта, а если значения для поля description нет -
// устанавливает default'ное значение в 'Описание недоступно'.
// Функция должна возвращать извлечённый массив из объектов
// с четыремя полями.



// let {special} = character;
// // console.log(special);
// for( let obj of special){
//     if (!obj.hasOwnProperty('description')){
//         obj.description = 'Описание недоступно';
//     }
// }
// console.log(special);

// Пишем функцию
export default function destructuring(object){
    let {special} = object;
    for( let obj of special){
        if (!('description'in obj)){
            obj.description = 'Описание недоступно';
        }
    };
    return special
}

// ПРОВЕРКА:

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
console.log(destructuring(character));