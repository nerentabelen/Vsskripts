let login = prompt ("Введите ваш логин");
let password = prompt ("Введите ваш пароль");
if (login === "admin" && password === "password"){
    console.log("Доступ разрешен");
}else{
    console.log("Доступ запрещен");
}
