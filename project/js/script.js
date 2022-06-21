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



