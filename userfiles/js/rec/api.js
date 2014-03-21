var REC_Cache, REC_API;
(function ($) {

    // Polyfill for Object.create
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create#Polyfill
    if ( ! Object.create) {
        Object.create = (function () {
            function F() {}
            return function (o) {
                if (arguments.length != 1) {
                    throw new Error('Object.create implementation only accepts one parameter.');
                }
                F.prototype = o;
                return new F();
            };
        })();
    }

    // Reusable Cache object
    REC_Cache = {
        store: {},
        has: function (key) {
            return !! this.store[key];
        },
        get: function (key) {
            if (this.has(key)) {
                return this.store[key];
            }
            return null;
        },
        set: function (key, value) {
            this.store[key] = value;
            return this; // for quick chaining
        }
    };

    // REC API requests
    REC_API = {
        api_key: '',
        domain: '',
        cache: Object.create(REC_Cache),
        request: function (path, params, method) {
            var dfd, cacheKey, self = this;

            // make sure required data given
            if ( ! this.api_key || ! this.domain) {
                throw new Error('Please set the api key and domain for these requests');
            }
            
            // setup a deferred object
            dfd = new $.Deferred();

            // hash arguments to use as key in cache
            cacheKey = JSON.stringify(arguments);
            if (this.cache.has(cacheKey)) {
                return dfd.resolve(this.cache.get(cacheKey));
            }

            // make sure required params are supplied and good defaults set
            if ( ! path) {
                throw new Error('Looks like you forgot to specify a path');
            }
            params = $.extend({
                api_key: this.api_key,
                fields: '*'
            }, params);
            method = method || 'GET';
            
            // Start ajax request
            $.ajax({
                url: '//' + this.domain + '/api/v1' + path,
                data: params,
                type: method,
                success: function (data) {
                    self.cache.set(cacheKey, data);
                    dfd.resolve(data);
                },
                error: function (data) {
                    dfd.reject(data.error);
                }
            });

            return dfd.promise();
        }
    };

}(jQuery));