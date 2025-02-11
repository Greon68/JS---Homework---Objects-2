import destructuring from '../destruct';

// test ('тест сортировочной функции', ()=>{
//     const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
//     const sortList = ['name','level'];
//     const result = orderByProps(obj,sortList);
//     const expected = [
//         {key: "name", value: "мечник"},
//         {key: "level", value: 2},
//         {key: "attack", value: 80},                
//         {key: "defence", value: 40},
//         {key: "health", value: 10} 
//       ];
//       expect(result).toEqual(expected)
  
//   });

  test ('тест деструктурирующей функции', ()=>{
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
    };

    let expected = [        
        {
            id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
    },
        {
            id: 9,
         name: 'Нокаутирующий удар',
         icon: 'http://...',
         description: 'Описание недоступно'
        }
    ]

    const result = destructuring(character)
    expect(result).toEqual(expected)
  
  });