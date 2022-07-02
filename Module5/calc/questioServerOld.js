const request = new XMLHttpRequest(); //!Сворювання запроса на сервер старим способом
request.open('POST', 'server.php');

request.setRequestHeader('Content-type', 'application/json' );//'multipart/form-data');
// const formData = new FormData(form);

const object = {};
//* formData.forEach(function(value, key){
    //* object[key] = value;
//* });

const json = JSON.stringify(object);

request.send(json);

request.addEventListener('load', () => {
    if (request.status === 200) {
        console.log(request.response);
        //* showThanksModal(message.success);
        //* form.reset();
        //* statusMessage.remove();
    } else {
        //* showThanksModal(message.failure);
    }
});