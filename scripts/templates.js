function getDishes(id) {
    return `<div class="dishes" id="${id}">
                <div class="dish_info">
                    <div class="dish_title">
                        <h4>${menu[id].name}</h4>
                    </div>
                    <span>${menu[id].description}</span>
                    <div class="price">${menu[id].price.toFixed(2).replace('.', ',')}€</div>
                </div>
                <div class="add_button" onclick="plus(${id}), updateBasket(${id})">
                    <h1>+</h1>
                </div>
            </div>`
}

function addItem(id) {
    return `<div class="item" id="basket_${id}">
                    ${updateItem(id)}
                </div>`

}

function updateItem(id) {
    return `<h4>${menu[id].name}</h4>
            <div class="amount">
                <div class="pl_min_button" onclick="minus(${id}), updateBasket(${id})">-</div>
                <div class="number">${menu[id].amount}x</div>
                <div class="pl_min_button" onclick="plus(${id}), updateBasket(${id})">+</div>
                <div class="sum">${(menu[id].amount*menu[id].price).toFixed(2).replace('.', ',')}€</div>
                <div class="delete" onclick="deleteItemFromBasket(${id})">
                  <img src="./assets/img/mulleimer.png" alt="">
              </div>
          </div>`
}

function updateCosts() {
    return `<div class="subposition">
                        <span>Zwischensumme</span>
                        <span>${subposition().toFixed(2).replace('.', ',')}€</span>
                    </div>
                    <div class="subposition">
                        <span>Lieferkosten</span>
                        <span>5,00€</span>
                    </div>
                    <div class="total">
                        <h4>Gesamt</h4>
                        <h4>${(subposition()+5).toFixed(2).replace('.', ',')}€</h4>
                    </div>`
}