//task2
console.log('Storozhuk');

//task3
let data1;
let data2;
data1 = 100;
data2 = "one hundred";
alert(data1);
alert(data2);
data1 = data2;
alert(data1);
alert(data2);

//task4
const typeObj = {
    String: "string",
    Number: 10,
    Boolean: true,
    Undefined: undefined,
    Null: null
};

//task5
const isAdult = prompt ("What is your age?");
console.log(isAdult);

//task7
const userName = prompt ("Write your name", "Dima");
const email = prompt ("Write your email", "example@gmail.com");
const password = prompt ("Write your password", " ");
alert("Dear " + userName + ", your email is " + email + ", your password is " + password);

//task8
const secondsInHour = 60 * 60;
const secondsInDay = secondsInHour * 24;
const secondsInMonth = secondsInDay * 30;
alert("Секунд в годині - " + secondsInHour + ", Секунд в добі - " + secondsInDay + ", Секунд в місяці - " + secondsInMonth);
