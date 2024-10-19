document.addEventListener('DOMContentLoaded', function() {
    const burgerIcon = document.querySelector('.burger-icon');
    const menuList = document.querySelector('.menu-list');

    // Создаем и добавляем элементы меню
    const listItem1 = document.createElement('li');
    const link1 = document.createElement('a');
    link1.href = '#';
    link1.textContent = 'Главная';
    listItem1.appendChild(link1);
    menuList.appendChild(listItem1);

    const listItem2 = document.createElement('li');
    const link2 = document.createElement('a');
    link2.href = '#';
    link2.textContent = 'О нас';
    listItem2.appendChild(link2);
    menuList.appendChild(listItem2);

    const listItem3 = document.createElement('li');
    const link3 = document.createElement('a');
    link3.href = '#';
    link3.textContent = 'Услуги';
    listItem3.appendChild(link3);
    menuList.appendChild(listItem3);

    const listItem4 = document.createElement('li');
    const link4 = document.createElement('a');
    link4.href = '#';
    link4.textContent = 'Контакты';
    listItem4.appendChild(link4);
    menuList.appendChild(listItem4);

    // Получаем все элементы меню после их создания
    const menuItems = document.querySelectorAll('.menu-list li');

    burgerIcon.addEventListener('click', function() {
        if (menuList.style.display === 'flex') {
            menuList.style.display = 'none';
        } else {
            menuList.style.display = 'flex';
            menuList.style.flexDirection = 'column';
        }
    });

    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener('click', function() {
            menuList.style.display = 'none';
        });
    }
});
