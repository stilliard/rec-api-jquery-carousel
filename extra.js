// [[START APP]]
jQuery(function ($) {

    // Set simple api connection details
    REC_API.api_key = 'ad2db8a13818bb553753120f297663da58973087';
    REC_API.domain = 'www.rec.dev';

    // Lookup products from given category
    REC_API.request('/products', { 'fields': '*', 'category': '1' }).done(function (data) {

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
