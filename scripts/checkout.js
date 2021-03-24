$(document).ready(function () {

    var item = localStorage.getItem(0);
    var total = localStorage.getItem('total');
    // Parse JSON string to object
    var realItem = JSON.parse(item);
    var itemName = realItem.name;
    var itemColour = realItem.colour;
    var itemSize = realItem.size;
    var itemPrice = realItem.price;
    var itemQuantity = realItem.quantity;
     

    getItems();
    var fadeTime = 300;

    function getItems() {
        if (localStorage.length > 0) {
            $(".item-quantity").text(itemQuantity);
            $(".edit-cart").text(itemQuantity);
            $("#priceValue").text(itemPrice);
            $(".item-size").text(itemSize);
            $(".item-colour").text(itemColour);
            $(".item-name").text(itemName);
            $("#product-subtotal").text((itemPrice * itemQuantity).toFixed(2));
            $("#basket-subtotal").text((itemPrice * itemQuantity).toFixed(2));
            $("#basket-total").text((Number(total)).toFixed(2));
        }
    }

    /* Recalculate cart */
    function recalculateCart(onlyTotal) {
        var subtotal = 0;

        /* Sum up row totals */
        $('.basket-product').each(function () {
            subtotal += parseFloat($(this).children('.subtotal').text());
        });

        /* Calculate totals */
        var total = subtotal;

        //If there is a valid promoCode
        var promoPrice = parseFloat($('.promo-value').text());
        if (promoPrice) {
            var discount = total * promoPrice / 100;
            total -= discount;
        }

        /*If switch for update only total, update only total display*/
        if (onlyTotal) {
            /* Update total display */
            $('.total-value').fadeOut(fadeTime, function () {
                $('#basket-total').html(total.toFixed(2));
                $('.total-value').fadeIn(fadeTime);
            });
        } else {
            /* Update summary display. */
            $('.final-value').fadeOut(fadeTime, function () {
                $('#basket-subtotal').html(subtotal.toFixed(2));
                $('#basket-total').html(total.toFixed(2));
                if (total == 0) {
                    $('.checkout-cta').fadeOut(fadeTime);
                } else {
                    $('.checkout-cta').fadeIn(fadeTime);
                }
                $('.final-value').fadeIn(fadeTime);
            });
        }
    }


    // Shipping Details

    
    // var itemColour = productRow.children().children('.item-colour').text();
    // var itemSize = productRow.children().children('.item-size').text();
    // var itemPrice = parseFloat(productRow.children('.price').text());

    $("#payment-cta").on('click', ()=>{
        var personDetails = $(".small-text").parent().parent();
        var itemName = personDetails.children("#firstName").text();
        console.log(itemName);
        console.log(personDetails)
    })

    function addPersonDetails(){
        var personDetails = $(".small-text").parent().parent();
        var itemName = personDetails.children('#firstName').text();
        console.log(itemName)
    };
})