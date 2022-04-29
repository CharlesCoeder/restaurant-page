function initialPage(){
    const content = document.getElementById('content');

    const header = document.createElement('div');
    header.classList.add('header');

    const headerText = document.createElement('h1');
    headerText.textContent = 'Burger & Fries';

    header.appendChild(headerText);

    const buttons = document.createElement('div');
    buttons.classList.add('buttons');

    const homeBtn = document.createElement('button');
    homeBtn.classList.add('homeBtn');
    homeBtn.textContent = 'Home';
    buttons.appendChild(homeBtn);

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('menuBtn');
    menuBtn.textContent = 'Menu';
    buttons.appendChild(menuBtn);

    const contactBtn = document.createElement('button');
    contactBtn.classList.add('contactBtn');
    contactBtn.textContent = 'Contact';
    buttons.appendChild(contactBtn);

    const container = document.createElement('div');
    container.classList.add('container');
    container.classList.add('main');

    content.appendChild(header);
    content.appendChild(buttons);
    content.appendChild(container);

}

export default initialPage;