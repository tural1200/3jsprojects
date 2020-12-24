// "send" id-li button tag-ni seç //
let sendButton = document.getElementById('send');
// "reset" id-li button tag-ni seç //
let resetButton = document.getElementById('reset');
// "form" id-li form tag-ni seç //
let form = document.getElementById('form');

// form-u submit etdikdə default dəyərdə qal //
form.addEventListener('submit', function(e){
    e.preventDefault();
})
// "reset" id-li button-a click etdikdə aşağıdakı funksiyanı icra et //
resetButton.addEventListener('click', function(){
    // "name" id-li input tag-ni seç //
    let name = document.getElementById('name');
    // "email" id-li input tag-ni seç //
    let email = document.getElementById('email');
    // "message" id-li input tag-ni seç //
    let message = document.getElementById('message');

    // inputların içini default vəziyyətinə gətirmək üçün string-ə boş dəyər ver //
    name.value = '';
    email.value = '';
    message.value = '';
})
// "send" id-li button-a click etdikdə şağıdakı funksiyanı icra et //
sendButton.addEventListener('click', function(e){
    // 
    let name = document.getElementById('name');
    // "name" id-li input tag-ni seç //
    let email = document.getElementById('email');
    // "email" id-li input tag-ni seç //
    let message = document.getElementById('message');
     // "message" id-li input tag-ni seç //

    name = name.value;
    localStorage.setItem('name', name);
    
    email = email.value;
    localStorage.setItem('email', email);

    message = message.value;
    localStorage.setItem('message', message);
    
})