/**
 *
 * ### options permitted : attribute(not Used For Now)
 * attribute        |   options     |   Value {default}
 * -----------------|---------------|------------------
 * data-html        |   html        |   true|false {false}
 * data-next        |   next        |   string|html depends on the data-html/html {'Next &#8618;'}
 * data-prev        |   prev        |   string|html depends on the data-html/html {'&#8617; Previous'}
 * data-overlay     |   overlay     |   true|false {true}
 *
 *
 * ### functions triggered
 * 1. onStart --> when the tour is start tour method is called.
 * 2. onClosed --> when the tour is close or destroyed. The current step element is available as a JQueryObject
 * 3. onChanged  --> when our tour moved from one step to another. The current step element is available as a JQueryObject
 * 4. onFinished(No use for the now) --> when our tour has finished its processing. The current step element is available as a JQueryObject
 * 
 * ### api stuff to build your custom view
 * 1. close
 * 2. next
 * 3. prev
 * 4. title
 * 5. content
 * 6. info
 * 
 * ### css for custom tour element stuff
 */
var ProductTour;
(function (jQuery) {
    /**
     * Productor Class object
     * @param options holds the possible set of options allowed
     * @constructor
     */
    ProductTour = function (options) {
        jQuery("").click(function () {
            
        });
        jQuery("").click(function () {
            
        });
        jQuery("").click(function () {
            
        });
    }
} (jQuery));
