define(function() {

    function Shell(shellView) {
        if (shellView.view === null) {
            throw "Error wirh the shellView"
        }
    }
    
    Shell.prototype = {
        render : function() {
            // @todo: implement this!
        }
    };

    return Shell;
});