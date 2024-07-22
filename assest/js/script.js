function insert(num){
    var number = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML= number + num;

}


function del(){
    var apagar = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = apagar.substring(0, apagar.length -1)
}
function calcular(){
    var resultado = document.getElementById('display').innerHTML;
    if(resultado){
        document.getElementById('display').innerHTML = eval(resultado);

        if (display === Infinity){
            document.getElementById('display').innerHTML = "you can divide per 0.."
        } 
    }
   
    else{
        document.getElementById('display').innerHTML = "Null..."
    }
}

function clean(){
    document.getElementById('display').innerHTML = "";
}

function logs(){
    let squar = document.getElementById('display').innerHTML; 
    document.getElementById('display').innerHTML = Math.log(squar);

}
function tang(){
    let tangs = document.getElementById('display').innerHTML; 
    document.getElementById('display').innerHTML = Math.tan(tangs);

}
function coss(){
    let num = document.getElementById('display').innerHTML; 
    document.getElementById('display').innerHTML = Math.cos(num);

}
function senn(){
    let num = document.getElementById('display').innerHTML; 
    document.getElementById('display').innerHTML = Math.sin(num);

}

function dez(){
    let num = document.getElementById('display').innerHTML; 
    document.getElementById('display').innerHTML = 10**(num);

}
function ln(){
    let num = document.getElementById('display').innerHTML; 
    document.getElementById('display').innerHTML = Math.log10(num);

}
function raiz(){
    let num = document.getElementById('display').innerHTML; 
    document.getElementById('display').innerHTML = Math.sqrt(num);

}
function exp(){
    let num = document.getElementById('display').innerHTML; 
    document.getElementById('display').innerHTML = Math.pow(num);

}
function pi(){
    let num = document.getElementById('display').innerHTML; 
    document.getElementById('display').innerHTML = Math.PI(num);

}
const fact = document.getElementById('display').innerHTML;
function el(fact){
    document.getElementById('display').innerHTML = Math.E(fact);

}




function showDivs(index) {
    // hide all the div 
    const sets = document.getElementsByClassName('slider');
    for (let i = 0; i < sets.length; i++) {
        sets[i].classList.remove('active');
    }
    
    // show the group the div per index
    const setToShow = document.getElementById('set' + index);
    if (setToShow) {
        setToShow.classList.add('active');
    }
}

// show the first div 
document.addEventListener('DOMContentLoaded', function() {
    showDivs(0);
});


function calculateIMC() {
    // Obtém os valores de peso e altura dos inputs
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    // Verifica se os valores são válidos
    if (weight > 0 && height > 0) {
        // Calcula o IMC
        const heightInMeters = height / 100;
        const imc = weight / (heightInMeters * heightInMeters);

        // Exibe o resultado com duas casas decimais
        const resultImc = document.getElementById('resultCoin');
        resultImc.innerHTML = `Seu IMC é: ${imc.toFixed(2)}`;

        // Adiciona uma classificação
        let classification = '';
        if (imc < 18.5) {
            classification = 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 24.9) {
            classification = 'Peso normal';
        } else if (imc >= 25 && imc < 29.9) {
            classification = 'Sobrepeso';
        } else {
            classification = 'Obesidade';
        }

        resultImc.innerHTML += `<br>Classificação: ${classification}`;

    } else {
        // Alerta se os valores não são válidos
        alert('Por favor, insira valores válidos para peso e altura.');
    }
}
function cleanImc(){
    document.getElementById('result').innerHTML = "";
    document.getElementById('weight').value= "";
    document.getElementById('height').value= "";
    
}




const deMoeda = document.getElementById('receber');
const paraMoeda = document.getElementById('para');
const valorConverte = document.getElementById('valor');
const converterBtn = document.getElementById('btnConverter');
const resultado = document.getElementById('resultado');
const text = document.getElementById('text');

const cotacao = 
{
    EUR:1,
    USD:1.1,
    CVE:110
}


converterBtn.addEventListener("click", ()=>{

    const de = deMoeda.value;
    const para = paraMoeda.value;
    const valor = valorConverte.value;
    
    console.log(de, para, valor);
    if(de == "EUR" && para == "EUR"){
        resultado= resultado
    }
    if(de == "EUR" && para == "CVE"){
        resultado.innerHTML = `${parseFloat(valor) * cotacao.CVE} escudos` 
    }
    if(de == "EUR" && para == "USD"){
        resultado.innerHTML = `${parseFloat(valor) * cotacao.USD} dolar` 
    }


    if(de == "CVE" && para == "CVE"){
        resultado.innerHTML = resultado
    }
    if(de == "CVE" && para == "EUR"){
        resultado.innerHTML = `${parseFloat(valor) * cotacao.EUR} euro`
    }
    if(de == "CVE" && para == "USD"){
        resultado.innerHTML = `${parseFloat(valor) * cotacao.USD} dolar`
    }


    if(de == "USD" && para == "USD"){
        resultado.innerHTML = resultado
    }
    if(de == "USD" && para == "EUR"){
        resultado.innerHTML = `${parseFloat(valor) * cotacao.EUR} euro` 
    }
    if(de == "USD" && para == "CVE"){
        resultado.innerHTML = `${parseFloat(valor) * cotacao.CVE} escudos` 
    }


})
//data

function addDays() {
    let dateInput = document.getElementById("date").value;
    if (!dateInput) {
        alert("Por favor, insira uma data inicial.");
        return;
    }
    let daysInput = document.getElementById("days").value;
    if (!daysInput) {
        alert("Por favor, insira o número de dias.");
        return;
    }
    let days = parseInt(daysInput);
    if (isNaN(days)) {
        alert("Por favor, insira um número válido de dias.");
        return;
    }
    let date = new Date(dateInput);
    if (isNaN(date.getTime())) {
        alert("Data inicial inválida.");
        return;
    }
    date.setDate(date.getDate() + days);
    document.getElementById("newDate").innerText = date.toISOString().split('T')[0];
}

function subtractDays() {
    let dateInput = document.getElementById("date").value;
    if (!dateInput) {
        alert("Por favor, insira uma data inicial.");
        return;
    }
    let daysInput = document.getElementById("days").value;
    if (!daysInput) {
        alert("Por favor, insira o número de dias.");
        return;
    }
    let days = parseInt(daysInput);
    if (isNaN(days)) {
        alert("Por favor, insira um número válido de dias.");
        return;
    }
    let date = new Date(dateInput);
    if (isNaN(date.getTime())) {
        alert("Data inicial inválida.");
        return;
    }
    date.setDate(date.getDate() - days);
    document.getElementById("newDate").innerText = date.toISOString().split('T')[0];
}

function calculateDifference() {
    let startDateInput = document.getElementById("startDate").value;
    let endDateInput = document.getElementById("endDate").value;
    if (!startDateInput || !endDateInput) {
        alert("Por favor, insira ambas as datas.");
        return;
    }
    let startDate = new Date(startDateInput);
    let endDate = new Date(endDateInput);
    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        alert("Data(s) inválida(s).");
        return;
    }
    let differenceInTime = endDate.getTime() - startDate.getTime();
    let differenceInDays = differenceInTime / (1000 * 3600 * 24);
    document.getElementById("difference").innerText = differenceInDays;
}

// for layout time to add and sub

function addTime(){
    let datetimeInput = document.getElementById("datetime").value;
    let date = new Date(datetimeInput);

    let months = parseInt(document.getElementById("months").value)|| 0;
    let weeks  = parseInt(document.getElementById("weeks").value)|| 0;
    let days   =  parseInt(document.getElementById("days").value)|| 0;
    let hours   =  parseInt(document.getElementById("hours").value)|| 0;
    let minutes   =  parseInt(document.getElementById("minutes").value)|| 0;
    let seconds   =  parseInt(document.getElementById("seconds").value)|| 0;

    date.setMonth(date.getMonth()+months);
    date.setDate(date.getDate()+(weeks*7)+days);
    date.setHours(date.getHours()+hours);
    date.setMinutes(date.getMinutes()+minutes);
    date.setMonth(date.getSeconds()+seconds);


    document.getElementById("newDatetime").innerText = date.toISOString().slice(0,19).replace("T","");
}

function subtractTime(){
    let datetimeInput = document.getElementById("datetime").value;
    let date = new Date(datetimeInput);

    let months = parseInt(document.getElementById("months").value)|| 0;
    let weeks  = parseInt(document.getElementById("weeks").value)|| 0;
    let days   =  parseInt(document.getElementById("days").value)|| 0;
    let hours   =  parseInt(document.getElementById("hours").value)|| 0;
    let minutes   =  parseInt(document.getElementById("minutes").value)|| 0;
    let seconds   =  parseInt(document.getElementById("seconds").value)|| 0;

    date.setMonth(date.getMonth()-months);
    date.setDate(date.getDate()-(weeks*7)-days);
    date.setHours(date.getHours()-hours);
    date.setMinutes(date.getMinutes()-minutes);
    date.setMonth(date.getSeconds()-seconds);


    document.getElementById("newDatetime").innerText = date.toISOString().slice(0,19).replace("T","");
}

function calculateTimeDifference(){
    let startDatetime = new Date(document.getElementById("startDatetime").value);
    let endDatetime = new Date (document.getElementById("endDatetime").value);
    let differenceInMilliseconds = endDatetime -startDatetime ;

    let seconds = Math.floor(differenceInMilliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes /60);
    let days = Math.floor(hours / 24);
    let weeks = Math.floor(days /7);
    let months = Math.floor(weeks / 30.44);

    seconds = seconds % 60;
    minutes = minutes % 60;
    hours = hours % 24;
    days  = days % 7;

    let resultTime = `${months} meses, ${weeks} semanas, ${days} dias,
     ${hours} horas, ${minutes} minutos, ${seconds} segundos`;

    document.getElementById("timeDifference").innerText = resultTime;

}