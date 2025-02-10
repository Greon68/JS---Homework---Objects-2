// TODO: write your code here
import sum from './basic';
import orderByProps from './orderByProps.js';

// console.log('worked +++');
// console.log('Hello !!!');

// console.log(sum([3, 17]));

const hero = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40
};

let sortList = ['name','level'];

console.log(orderByProps(hero,sortList));