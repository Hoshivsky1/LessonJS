/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */


//*====Constant===================================================
const movieDB = {
    movies: [
        "Логан",
        "Ліга справедливості",
        "Ла-ла ленд",
        "Одержимість",
        "Скотт Пілігрім проти..."
    ]
};

const promoAdv = document.querySelector('.promo__adv'),
      advImage = promoAdv.querySelectorAll('img'),
      promoGenre = document.querySelector('.promo__genre'),
      backgroundImg = document.querySelector('.promo__bg'),
      filmList = document.querySelector('.promo__interactive-list');

//* ====RemoveAdv==================================================
advImage.forEach(item => {
    item.remove();
});

//*=====RenameText=================================================
promoGenre.textContent = 'ДРАМА';

//*====ChangeBackground============================================
backgroundImg.style.backgroundImage = "url('./img/bg.jpg')";

//*===ChangeList===================================================
filmList.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    filmList.innerHTML += `
    <li class="promo__interactive-item">${i+1}. ${film}
        <div class="delete"></div>
    </li>
    `;
});



