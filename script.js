'use sctrict';


let money = +prompt('Ваш бюджет на месяц', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};



for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", '');
    let  b = +prompt("Во сколько это обойдется?", '');

    if (typeof(a) === 'string' && typeof(a) != null && a != '' && a.length < 50 
        && typeof(b) != null && b != ''){
        appData.expenses[a] = b;
    } else{
        console.log("Ошибка ввода данных, пожалуйста, повторите попытку");
        i = i - 1;
    };
};


/* let i = 0;

while ( i < 2){
    i = i + 1;
    let a = prompt("Введите обязательную статью расходов в этом месяце", '');
    let  b = +prompt("Во сколько это обойдется?", '');

    if (typeof(a) === 'string' && typeof(a) != null && a != '' && a.length < 50 
        && typeof(b) != null && b != ''){
        appData.expenses[a] = b;
    } else{
        console.log("Ошибка ввода данных, пожалуйста, повторите попытку");
        i = i - 1;
    };  
}; */

/* let i = 0; 

do{
    i = i + 1;
    let a = prompt("Введите обязательную статью расходов в этом месяце", '');
    let  b = +prompt("Во сколько это обойдется?", '');

    if (typeof(a) === 'string' && typeof(a) != null && a != '' && a.length < 50 
        && typeof(b) != null && b != ''){
        appData.expenses[a] = b;
    } else{
        console.log("Ошибка ввода данных, пожалуйста, повторите попытку");
        i = i - 1;
    };     
} while ( i < 2); */



appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100){
    console.log("Малый достаток");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
    console.log("Средний достаток");
} else if (appData.moneyPerDay > 2000){
    console.log("Большой достаток");
} else{
    console.log("Ошибка"); 
}

console.log(appData);