function render() {
    let contentMains = '';
    let contentSides = '';
    for (let i = 0; i < menu.length; i++) {
        if (menu[i].category == "mains") {
            contentMains += getDishes(i);
        }
        else {
            contentSides += getDishes(i);
        }
    }
    document.getElementById('mains').innerHTML = contentMains;
    document.getElementById('sides').innerHTML = contentSides;
}

function updateBasket(id) {
    if (document.getElementById('items').innerHTML.includes(`basket_${id}`) == true) {
        document.getElementById(`basket_${id}`).innerHTML = updateItem(id);
    }
    if (document.getElementById('items').innerHTML.includes(`basket_${id}`) == false) {
        document.getElementById('items').innerHTML += addItem(id);
    }
    if (menu[id].amount == 0) {
        deleteItemFromBasket(id)
    }
    document.getElementById('costs').innerHTML = updateCosts();
    if (subposition() == 0) {
        document.getElementById('costs').innerHTML = '';
    }
}

function plus(id) {
    menu[id].amount += 1;
}

function minus(id) {
    if (menu[id].amount > 0) {
        menu[id].amount -= 1;
    }
}

function deleteItemFromBasket(id) {
    document.getElementById(`basket_${id}`).innerHTML = '';
    menu[id].amount = 0;
    document.getElementById('costs').innerHTML = updateCosts();
    if (subposition() == 0) {
        document.getElementById('costs').innerHTML = '';
    }
}

function subposition() {
    let sum = 0;
    for (let i = 0; i < menu.length; i++) {
        sum += menu[i].amount * menu[i].price
    }
    return sum
}