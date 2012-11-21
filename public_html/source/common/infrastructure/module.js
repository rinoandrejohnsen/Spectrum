define(function() {

    function Module() {
        this.fns = [];
    }
    
    Module.prototype = {
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

    return Module;
});