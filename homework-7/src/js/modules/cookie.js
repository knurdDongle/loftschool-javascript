import {displayElement, deleteElement , isLink} from './ui'

function getCookie() {
    let cookie = document.cookie.split(';');
    let createDeleteBtn = true;

    if (cookie.length) {
        for (let i = 0; i < cookie.length; i++ ) {
            displayElement(cookie[i].split('=')[0], cookie[i].split('=')[1], createDeleteBtn)
        }
    }
}

function _delCookeByName(name) {
    let date = new Date(0);
    document.cookie = name+"=; expires=" + date.toUTCString();
}


function delCookie(e) {

    if (isLink(e.target)) {

        let nameCookie = e.target.parentNode.parentNode.firstChild.textContent;
        let confirmDelete = confirm(`Удалить cookie ${nameCookie} ?`);

        if (confirmDelete) {
            _delCookeByName(nameCookie);
            deleteElement(e.target.parentNode.parentNode);
        }
    }

    e.preventDefault();
}


function createCookie(e) {
    console.log(e.target);

    let name = document.querySelector('#name');
    let value = document.querySelector('#value');
    let days = document.querySelector('#days');

    console.log(name);

    if (name.value) {
        document.cookie =`${name.value}=${name.value}`
    }

    e.preventDefault();
}

export { getCookie , delCookie, createCookie }