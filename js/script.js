'use strict';

const ul = document.querySelector('.list');

ul.addEventListener('click', (event) => {
    const removeBtn = event.target.closest('.remove-btn');

    if (removeBtn) {
        const li = removeBtn.closest('.list-item');
        li.remove();
        return;
    }

    const select = event.target.closest('.list-item');
    if (select) {
        select.classList.toggle('selected');
    }
});

const input = document.querySelector('.input');
const addBtn = document.querySelector('.add-btn');

addBtn.addEventListener('click', () => {

    // Ловим значение инпут
    const text = input.value;


    if (!text.trim()) return;
    input.value = '';

    //Создаём новый элемент
    const newElement = document.createElement('li');
    newElement.classList.add('list-item');
    newElement.textContent = text;

    // Создаём элемент удаления
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn');
    removeBtn.textContent = '✖';

    // Добавляем элемент удаления к li элементу
    newElement.append(removeBtn)

    // Добавляем элемент в список
    ul.append(newElement);
});