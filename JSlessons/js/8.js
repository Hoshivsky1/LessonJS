function first() {

    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`I lerning: ${lang}`);
    callback();
}

function done() {
    console.log('Я пройшов урок');
}

learnJS('JavaScript', done);