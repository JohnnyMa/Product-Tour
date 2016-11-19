var ProductTour;
(function(jQuery) {
    /**
     * Productor Class object
     * @param options holds the possible set of options allowed
     * @constructor
     */
    ProductTour = function(options) {
        var _onStart = undefined;
        var _onClose = undefined;
        var _onChange = undefined;

        var _options = {//default options
            overlay: true,
            template: 'default',
            nextText: 'Next',
            prevText: 'Prev',
            contentStyle: 'text'
        };

        jQuery.extend(_options, options);

        //validate _options after merging

        /**
         * set onStart callback
         */
        this.onStart = function(cb){
            if(cb !== undefined && typeof cb === 'function') _onStart = cb;
        }
        /**
         * set onClose callback
         */
        this.onClose = function(cb){
            if(cb !== undefined && typeof cb === 'function') _onClose = cb;
        }
        /**
         * set onChange callback
         */
        this.onChange = function(cb){
            if(cb !== undefined && typeof cb === 'function') _onChange = cb;
        }
        /**
         * function that register click listeners for 
         * @close, @next @previous
         */
        function registerListeners() {
            jQuery(".product-tour-wrapper .product-tour-close").click(function(e) {

            });
            jQuery(".product-tour-wrapper .product-tour-next").click(function(e) {

            });
            jQuery(".product-tour-wrapper .product-tour-prev").click(function(e) {

            });
        }

        // if(_onClose !== undefined && typeof _onClose === 'function') _onClose(e);
    }
} (jQuery));
