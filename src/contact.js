function contact(){
    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');

    const phoneInfo = document.createElement('div');
    phoneInfo.classList.add('info');
    const phoneText = document.createElement('div');
    phoneText.textContent = "Phone Number";
    const phoneNumber = document.createElement('div');
    phoneNumber.textContent = "555-555-5555";
    const phoneImg = document.createElement('img');
    phoneImg.src = "../src/phone.svg";
    phoneImg.alt = "Phone Number";
    phoneInfo.appendChild(phoneText);
    phoneInfo.appendChild(phoneNumber);

    const addressInfo = document.createElement('div');
    addressInfo.classList.add('info');
    const addressText = document.createElement('div');
    addressText.textContent = "Address";
    const addressNumber = document.createElement('div');
    addressNumber.textContent = "123 Main Street, New York, NY 10010";
    const addressImg = document.createElement('img');
    addressImg.src = "../src/address.svg";
    addressImg.alt = "Address";
    addressInfo.appendChild(addressText);
    addressInfo.appendChild(addressNumber);

    const phoneSection = document.createElement('div');
    phoneSection.classList.add('infoSection');
    phoneSection.appendChild(phoneInfo);
    phoneSection.appendChild(phoneImg);

    const addressSection = document.createElement('div');
    addressSection.classList.add('infoSection');
    addressSection.appendChild(addressInfo);
    addressSection.appendChild(addressImg);

    contactInfo.appendChild(phoneSection);
    contactInfo.appendChild(addressSection);

    const form = document.createElement('form');
    const nameInput = document.createElement('input');
    nameInput.type = "text";
    nameInput.placeholder = "Name";
    const emailInput = document.createElement('input');
    emailInput.type = "email";
    emailInput.placeholder = "Email";
    const messageInput = document.createElement('textarea');
    messageInput.cols = "30";
    messageInput.rows = "10";
    messageInput.placeholder = "Message...";
    const submitBtn = document.createElement('button');
    submitBtn.type = "button";
    submitBtn.textContent = "Submit";
    form.appendChild(nameInput);
    form.appendChild(emailInput);
    form.appendChild(messageInput);
    form.appendChild(submitBtn);

    const container = document.querySelector('.main');
    container.appendChild(contactInfo);
    container.appendChild(form);
}

export default contact;