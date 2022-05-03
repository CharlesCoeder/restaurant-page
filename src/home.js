function home(){
    const container = document.querySelector('.main');
    const hero = document.createElement('div');
    hero.classList.add('hero');
    hero.innerHTML = '<h1>Unimaginable flavor. Impeccable results.</h1>';
    container.appendChild(hero);

    const innerContainer = document.createElement('div');
    innerContainer.classList.add('container');

    const text = document.createElement('div');
    text.classList.add('text');
    const p1 = document.createElement('p');
    p1.textContent = "This is a description about our restaurant! We love to serve only the best food and yeah I'm just writing random text to fill up the space.";

    const p2 = document.createElement('p');
    p2.textContent = "Purus non enim praesent elementum facilisis leo vel fringilla. Fusce ut placerat orci nulla pellentesque dignissim. Adipiscing commodo elit at imperdiet dui accumsan sit amet. Lacus vel facilisis volutpat est velit egestas dui id. Aenean et tortor at risus viverra adipiscing at in tellus. Vitae turpis massa sed elementum tempus. In pellentesque massa placerat duis ultricies lacus sed turpis. Laoreet non curabitur gravida arcu ac tortor dignissim. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Sed ullamcorper morbi tincidunt ornare massa eget. Rutrum quisque non tellus orci. Urna id volutpat lacus laoreet. Sit amet consectetur adipiscing elit pellentesque habitant.";

    const p3 = document.createElement('p');
    p3.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis mauris sit amet massa vitae tortor condimentum lacinia quis. Sit amet facilisis magna etiam tempor. Auctor neque vitae tempus quam. Etiam erat velit scelerisque in dictum. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Et pharetra pharetra massa massa ultricies mi. Dis parturient montes nascetur ridiculus mus. Viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas. Cum sociis natoque penatibus et magnis dis parturient. Quis eleifend quam adipiscing vitae. Enim nunc faucibus a pellentesque sit. Eu augue ut lectus arcu bibendum. Tristique risus nec feugiat in fermentum posuere urna nec. Luctus venenatis lectus magna fringilla urna porttitor rhoncus.";

    text.appendChild(p1);
    text.appendChild(p2);
    text.appendChild(p3);

    innerContainer.appendChild(text);

    container.appendChild(innerContainer);
}

export default home;