function calculate() {
    var currency = parseFloat($('#currency').val());

    var price = parseFloat($('#price').val());
    if(!price) price = 0;

    var shipping = parseFloat($('#shipping').val());
    if(!shipping) shipping = 0;

    var gift = $('#gift:checked').length;
    if(gift == 0) { gift = false } else { gift = true };

    var fee = parseFloat($('#fee').val());
    if(!fee) fee = 0;

    var converted_price = price*currency;
    var converted_shipping = shipping*currency;

    var limit = 200;
    if(gift) {
        limit = 1000;
    }

    var vat = 0;
    if(converted_price >= limit) {
        vat = (converted_price + converted_shipping) * 0.25;
    }

    var total = converted_price + converted_shipping + fee + vat;

    var output = "";

    $('#result').html(total.toFixed(2));
    $('#result-price').html(converted_price.toFixed(2));
    $('#result-shipping').html(converted_shipping.toFixed(2));
    $('#result-vat').html(vat.toFixed(2));
}

$(document).ready(function() {
	$('#calculate-button').on('click', function() {
		calculate();
	});
});