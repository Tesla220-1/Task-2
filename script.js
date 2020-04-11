'use sctrict';


let money, time;

function start(){
    money = +prompt('Ваш бюджет на месяц', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    while(money == null || money == "" || isNaN(money) || money < 0){
        money = +prompt('Ваш бюджет на месяц', '');
    }

}




function chooseExpenses(){
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", '');
        let  b = +prompt("Во сколько это обойдется?", '');
    
        if (typeof(a) === 'string' && typeof(a) != null && a != '' && a.length < 50 
            && typeof(b) != null && b != ''){
            appData.expenses[a] = b;
        } else{
            console.log("Ошибка ввода данных, пожалуйста, повторите попытку");
            i = i - 1;
        }
    }
}



function detectDayBudget(){
    appData.budget = money;
    appData.timeData = time;
    appData.moneyPerDay = +(appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}



function detectLevel(){
    if(appData.moneyPerDay < 100){
        console.log("Малый достаток");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
        console.log("Средний достаток");
    } else if (appData.moneyPerDay > 2000){
        console.log("Большой достаток");
    } else{
        console.log("Ошибка"); 
    }
}



function checkSavings(){
    if (appData.savings == true){
        let save = +prompt("Какова сумма накоплений");
        let precent = +prompt("Под какой процент?");
        appData.income = +(save/100/12*precent).toFixed();
        alert("Доход в месяц с вашего депозита " + appData.income);
    }
}




function chooseOptExpenses(){
    for (let i = 0; i < 3; i++){
        let note = prompt("Статья необязательных расходов");
        let sum = +prompt("Сколько нужно денег?");
        appData.optionalExpenses[note] = sum;
    }
}

let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : true
};

start();
chooseExpenses();
detectDayBudget();
detectLevel();
checkSavings();
chooseOptExpenses();

console.log(appData);