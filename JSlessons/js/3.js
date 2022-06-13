const numberOfFilms = prompt("Скільки фільмів ви переглянули:?");


let personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

const a = prompt('Name films?',''),
      b = prompt('good films?','');

personalMovieDB.movies[a] = b;

console.log(personalMovieDB);

