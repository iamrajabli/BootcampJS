'use strict';

const name = document.getElementById('name');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const form__contact = document.getElementById('form__contact');

form__contact.addEventListener('submit', insert);

function insert(e) {
    e.preventDefault();

    const addedPerson = {
        name: name.value,
        surname: surname.value,
        email: email.value
    };

    const result = controlOfData(addedPerson);

    if (result.result) {
        resultInfo(result.result, result.message);
    } else {
        resultInfo(result.result, result.message);
    }

};

function controlOfData(person) {
    for (let i in person) {
        if (person[i]) {
            return {
                result: true,
                message: 'Successfuly!'
            }
        } else {
            return {
                result: false,
                message: 'Required field!'
            }
        }
    }
};