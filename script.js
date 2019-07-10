//получение элементов документа
const form = document.querySelector('.popup-form');
const table = document.querySelector('.userlist-content')
const userlist = JSON.parse(localStorage.getItem('userlist')) || [];

//добавление данных в localStorage
function addItem(e) {
    e.preventDefault();
    const username = (this.querySelector('[name=username]')).value;
    const password = (this.querySelector('[name=password]')).value;
    const user = {
      username,
      password
    };
    userlist.push(user);
    localStorage.setItem('userlist', JSON.stringify(userlist));
    this.reset();
}