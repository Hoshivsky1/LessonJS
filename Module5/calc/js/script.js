const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-9');
    request.send();
    
    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = 'Щось пішло не так';
        }
        
        if (inputUsd.value === "NaN"){
            inputUsd.value = 'Ви ввели не цифри';
        }
    });

    // status
    //statusText 
    // response - відповіть
    // readyState 


});