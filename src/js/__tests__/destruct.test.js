import destructuring from '../destruct';


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