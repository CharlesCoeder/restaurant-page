function menu(){

    function newSection(name){
        const section = document.createElement('div');
        section.classList.add('section');
        const sectionTitle = document.createElement('div');
        sectionTitle.classList.add('sectionTitle');
        sectionTitle.textContent = name;
        section.appendChild(sectionTitle);

        return section;
    }

    function newMenuItem(name, price, description=""){

        const item = document.createElement('div');
        item.classList.add('item');

        const nameDiv = document.createElement('h1');
        nameDiv.classList.add('name');
        nameDiv.textContent = name;
        item.appendChild(nameDiv);

        if (!description == ""){
            const descriptionDiv = document.createElement('div');
            descriptionDiv.classList.add('description');
            descriptionDiv.textContent = description;
            item.appendChild(descriptionDiv);
        }

        const priceDiv = document.createElement('div');
        priceDiv.classList.add('price');
        priceDiv.textContent = price;
        item.appendChild(priceDiv);

        return item;
    }

    const content = document.getElementById('content');
    content.classList.add('scrollbar');

    const menu = document.createElement('div');
    menu.classList.add('menu');

    const columnOne = document.createElement('div');
    columnOne.classList.add('column');
    columnOne.classList.add('one');
    menu.appendChild(columnOne);

    const columnTwo = document.createElement('div');
    columnTwo.classList.add('column');
    columnTwo.classList.add('two');
    menu.appendChild(columnTwo);

    const burgers = newSection('Burgers');
    burgers.appendChild(newMenuItem("Classic", 10, "onion, tomato, lettuce, choice of cheese"));
    burgers.appendChild(newMenuItem("Chimichurri", 13, "arugula, olive oil, basil, ricotta, chimichurri sauce"));
    burgers.appendChild(newMenuItem("Greek", 12, "lettuce, tomato, cucumber, feta, tzatziki"));
    burgers.appendChild(newMenuItem("Lamb", 14, "1/3 lb. lamb, onion, tomato, lettuce, goat cheese"));
    burgers.appendChild(newMenuItem("Elk", 15, "1/3 lb. elk, caramelized onions, gouda"));
    burgers.appendChild(newMenuItem("Salmon", 13, "salmon, tomato, lettuce, garlic lemon aioli"));
    burgers.appendChild(newMenuItem("BBQ", 12, "sauteed onion, barbeque sauce, choice of cheese"));
    burgers.appendChild(newMenuItem("Vegetarian", 11, "black bean patty, mixed greens, olive oil, goat cheese"));

    const fries = newSection('Fries');
    fries.appendChild(newMenuItem("Standard French", 3));
    fries.appendChild(newMenuItem("Waffle", 4));
    fries.appendChild(newMenuItem("Taters", 4));
    fries.appendChild(newMenuItem("Cajun", 5));
    fries.appendChild(newMenuItem("Sweet Potato", 5));
    fries.appendChild(newMenuItem("Loaded", 6));

    const desserts = newSection('Desserts');
    desserts.appendChild(newMenuItem("Chocolate Mousse Cake", 8));
    desserts.appendChild(newMenuItem("Tiramisu", 8));
    desserts.appendChild(newMenuItem("Ice Cream", 4, "vanilla, chocolate, coffee, green tea, strawberry, mint chocolate chip"));

    columnOne.appendChild(burgers);
    columnTwo.appendChild(fries);
    columnTwo.appendChild(desserts);
    
    const container = document.querySelector('.main');
    container.appendChild(menu);
    container.appendChild(menu);
}

export default menu;