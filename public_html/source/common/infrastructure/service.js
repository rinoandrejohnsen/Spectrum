define(function() {

    function Service() {
        this.fns = [];
    }
    
    Service.prototype = {
        add : function(fn) {
            this.fns.push(fn);
        },
        remove : function(fn) {
            this.fns = this.fns.filter(
                function(el) {
                    if ( el !== fn ) {
                        return el;
                    }
                }
            );
        }
    };

    return Service;
});