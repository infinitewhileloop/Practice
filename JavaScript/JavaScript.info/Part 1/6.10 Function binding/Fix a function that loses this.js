// https://javascript.info/bind#fix-a-function-that-loses-this

let boundToUser = askPassword.bind(user, user.loginOk.bind(user), user.loginFail.bind(user));
boundToUser();
