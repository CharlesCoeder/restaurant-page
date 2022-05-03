import initialPage from './initialPage';
import home from './home';
import menu from './menu';

initialPage();
home();
const container = document.querySelector('.main');
const content = document.getElementById('content');


function removeContent(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    if (content.className == 'scrollbar'){
        content.classList.remove('scrollbar');
    }
}

const homeBtn = document.querySelector('.homeBtn');
homeBtn.addEventListener('click', () => {
    removeContent();
    home(); 
});

const menuBtn = document.querySelector('.menuBtn');
menuBtn.addEventListener('click', () => {
    removeContent();
    menu();
});

const contactBtn = document.querySelector('.contactBtn');
contactBtn.addEventListener('click', () => {
    removeContent();
    const test = document.createElement('div');
    test.textContent = "Contact page to be implemented...";
    container.appendChild(test);
});