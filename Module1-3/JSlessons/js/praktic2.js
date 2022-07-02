const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Скілки фільмів ви уже переглянули?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Скілки фільмів ви уже переглянули?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один із останніх перегянутих фільмів?', ''),
                  b = prompt('На скільки оціните його ?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Переглянуто доволі мало фільмів");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Ви класичний глядач");
        } else if (personalMovieDB.count >= 30) {
            console.log("Ви кіноман");
        } else {
            console.log("Виникла помилка");
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
            let genre = prompt(`Ваш улюблений жанр під номером ${i}`);

            if (genre === '' || genre == null) {
                console.log('Ви ввели некоректні дані або не ввели їх зовсім');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }  
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Улюблений жанр №${i + 1} - це ${item}`);
        });
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.writeYourGenres();
