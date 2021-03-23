function increaseCount(a, b) {
    var input = b.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
}

function decreaseCount(a, b) {
    var input = b.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
    }
}

var itemName = document.getElementById("item-name").innerText;
var itemPrice = Number(document.getElementById("item-price").innerText).toFixed(2);
var itemCount = document.getElementById("item-count").value;
var cartCounter = Number(document.getElementById("shop-cart-counter").innerText);


function addItem(){
    var values = getItems();
    // if(itemName === )
    localStorage.setItem(0,JSON.stringify({itemName,itemPrice,itemCount}));
    cartCounter += 1;
    document.getElementById("shop-cart-counter").innerText = cartCounter;
};

function getItems() {
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]));
    }
    return values;
}