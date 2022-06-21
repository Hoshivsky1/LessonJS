const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');
      
      
// box.style.backgroundColor = 'green';
// box.style.width = '500px';

box.style.cssText = `background-color: green; width: 500px;`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'Blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'Blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут був я!');

div.classList.add('black');

wrapper.append(div);
div.style.width = '400px';
// hearts[0].append(div);

// wrapper.insertBefore(div, hearts[1] );

// circles[0].remove();
// wrapper.removeChild(hearts[1]);

// hearts[0].replaceWith(circles[0]);
wrapper.replaceChild(circles[0], hearts[1]);

// wrapper.prepend(div);

div.innerHTML = '<h1>Hello World!</h1>'; 
// div.textContent = '<h1>Hello World!</h1>'; 

div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');