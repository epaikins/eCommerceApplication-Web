$(document).ready(function () {

    $(".up").click(function () {
        increaseCount(this);
    });

    $(".down").click(function () {
        decreaseCount(this);
    });

    $("#add-btn").click(function () {
        addItem();
    });

    function increaseCount(b) {
        var input = b.previousElementSibling;
        var value = parseInt(input.value, 10);
        value = isNaN(value) ? 0 : value;
        value++;
        input.value = value;
    }

    function decreaseCount(b) {
        var input = b.nextElementSibling;
        var value = parseInt(input.value, 10);
        if (value > 1) {
            value = isNaN(value) ? 0 : value;
            value--;
            input.value = value;
        }
    }

    var productRow = $(".item-name").parent();
    var itemName = productRow.children('.item-name').text();
    var itemColour = productRow.children().children('.item-colour').text();
    var itemSize = productRow.children().children('.item-size').text();
    var itemPrice = parseFloat(productRow.children('.price').text());


    // var itemName = document.getElementById("item-name").innerText;
    // var itemPrice = Number(document.getElementById("item-price").innerText).toFixed(2);
    // var itemCount = document.getElementById("item-count").value;
    // var cartCounter = Number(document.getElementById("shop-cart-counter").innerText);


    function addItem() {
        var itemQuantity = Number($('#item-count').val());

        if (localStorage.length > 0) {
            // Retrieve the JSON string
            var item = localStorage.getItem(0);

            // Parse JSON string to object
            var realItem = JSON.parse(item);

            itemQuantity += realItem.quantity
        }

        var itemObject = {
            name: itemName,
            colour: itemColour,
            size: itemSize,
            price: itemPrice,
            quantity: itemQuantity
        };

        localStorage.setItem(0, JSON.stringify(itemObject));
        document.getElementById("shop-cart").innerText = itemQuantity;
    };

    getQuantity();

    function getQuantity() {
        if(localStorage.length>0){
            var item = localStorage.getItem(0);
    
            // Parse JSON string to object
            var realItem = JSON.parse(item);
    
            var itemQuantity = realItem.quantity;
    
            $("#shop-cart").text(itemQuantity);
        }
    }

})