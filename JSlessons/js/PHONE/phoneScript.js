//! touchstartі - при нажаттю цього буде виконуватись
//! touchmove - якщо палець тримається і рухається то буде зпрацьовувати це
//! touchend - якщо палеь відірвався вд елементу то спрацьовує
//! touchenter - коли ведем  пальцем оп екрану ы якщо виходи на цей елемент то спрацьовує
//! touchleave - коли палець сходить з елементу запускається.
//! touchcancel - коли точка більше не працює на поверхні- якщо вийде за браузер почне працювати.

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log(e.targetTouches);
        console.log('start');
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log(e.targetTouches[0].pageX);
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        
    });


});


//! touches - показує скільки пальців працюють з екраном
//! targetTouches - всі пальці які працюють тільки з цим елементом
//! changedTouches - список пальців які участвують 