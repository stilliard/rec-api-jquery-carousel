// 
// RVS FEATURED SLIDER
// 
/*jshint multistr: true */
(function ($) {

    // 
    // Banner canvas code
    // 
    function showBanner(id) {

        // Init Canvas
        var canvas = initCanvas($('#banner_canvas_' + id)[0]);

        // Setup a 2D canvas to work on
        ctx = canvas.getContext('2d');

        // Set Font
        ctx.font = 'bold 13px Arial, Helvetica, sans-serif';

        // posistion text
        ctx.translate(16, 75);

        // rotate text
        ctx.rotate( Math.PI/-4 );

        // Draw banner background
        ctx.globalAlpha = 0.6;
        ctx.fillStyle = '#4c95b6';
        ctx.fillRect(-40, -20, 200, 30);
        ctx.globalAlpha = 1;

        // Set Colour
        ctx.fillStyle = '#FFFFFF';
        ctx.textAlign = 'center';

        // Set text content
        ctx.translate(42, 0);
        ctx.fillText('FEATURED', 0, 0);

        // Save and output
        ctx.save();
    }

    // 
    // init app on dom ready
    // 
    $(document).ready(function() {
        
        // Set simple api connection details
        REC_API.api_key = '11a10d6beeca28e429de1f44f35cf8eeaa81e80a';
        REC_API.domain = '5.153.230.147';

        // Lookup products from given category
        REC_API.request('/products', { 'fields': '*' }).done(function (data) {

            // setup end html
            var html = '';

            // loop products
            $.each(data.products, function (i, product) {

                html += '<li class="rvs-product-container">\
                    <!-- image (inc banner) -->\
                    <a class="rvs-product-image-container" href="'+ product.link +'">\
                        <img class="rvs-product-image" title="View product" alt="'+ product.name +'" src="'+ product.image +'" />\
                        <!-- banner canvas -->\
                        <canvas width="120" height="120" id="banner_canvas_'+ product.id +'" class="banner-canvas"></canvas>\
                    </a>\
                    <!-- Attribute lists -->\
                    <ul class="rvs-product-attribute-container">\
                ';
                $.each(product.attributes, function (j, attr) {
                    html += '\
                        <li class="rvs-product-attribute">\
                        '+ attr.value +'\
                        </li>';
                });
                html += '\
                        <li class="rvs-product-call-to-action">\
                            <a href="'+ product.link +'">Click here for more information</a>\
                        </li>\
                    </ul>\
                </li>';

            });

            // show end html, and init carousel/slider
            $('.rvs-featured-slider-container ul').html(html);

            // loop products again to init the banner
            $.each(data.products, function (i, product) {
                showBanner(product.id);
            });

        });

    });

}(jQuery));