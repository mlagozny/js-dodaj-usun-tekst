

let first = document.getElementById('tekst');
let second = document.querySelector('button#dodaj');
second.onclick = function () {
    first.textContent = 'Przykładowy tekst';
}
let third = document.querySelector('button#usun');
third.onclick = function () {
    first.textContent = '';
}