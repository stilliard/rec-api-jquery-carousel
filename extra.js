// [[START APP]]
jQuery(function ($) {

    // Set simple api connection details
    REC_API.api_key = '4f98745ccfa44ddd2c6794add9ea76332b76a1cb';
    REC_API.domain = 'www.tustains.co.uk';

    // Lookup products from given category
    REC_API.request('/products', { 'fields': '*', 'category': '29' }).done(function (data) {

        // setup end html
        var html = '';

        // loop products
        $.each(data.products, function (i, product) {
            html += '<li>\
                <span class="app-pc-item-default">\
                    <img src="'+ product.image +'">\
                </span>\
                <a href="'+ product.link +'" class="app-pc-item-hover">\
                    <img src="'+ (product.additional_images.length > 0 ? product.additional_images[0].location : product.image) +'">\
                    <strong>'+ product.name +'</strong>\
                    <small>View Details</small>\
                </a>\
            </li>';
        });

        // show end html, and auto start carousel
        $('.app-products-carousel-container ul').html(html).microfiche({
            cyclic: true,
            autoplay: 3,
            autopause: true
        });

    });

});
// [[END APP]]
