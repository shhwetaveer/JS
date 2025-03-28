const check = document.getElementById('check');
const triggered = document.getElementById('triggered');
const thugesh = document.getElementById('thugesh');
const bbvibe   = document.getElementById('bbvibe');
const pw = document.getElementById('pw');
const submit = document.getElementById('submit');
const result = document.getElementById('result');
const subResult = document.getElementById('subResult');

submit.onclick = function() {
    if(check.checked){
        result.textContent = "You have paid Version of Youtube";
    }
    else{
        result.textContent = "You have free Version of Youtube";
    }
    if(triggered.checked){
        subResult.textContent = "You are a triggered person";
    }
    else if(thugesh.checked){
        subResult.textContent = "You are a thugesh fan";
    }
    else if(bbvibe.checked){
        subResult.textContent = "You are a bbvibe fan";
    }
    else if(pw.checked){
        subResult.textContent = "You are a Alankh pandey fan";
    }
    else{
        subResult.textContent = "You have not selected any of the YouTuber";
    }

}