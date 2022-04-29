import initialPage from './initialPage';
import home from './home';

initialPage();
home();
const container = document.querySelector('.main');

function removeContent(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
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
    const test = document.createElement('div');
    test.textContent = "Menu page to be implemented...";
    container.appendChild(test);
});

const contactBtn = document.querySelector('.contactBtn');
contactBtn.addEventListener('click', () => {
    removeContent();
    const test = document.createElement('div');
    test.textContent = "Contact page to be implemented...";
    container.appendChild(test);
});