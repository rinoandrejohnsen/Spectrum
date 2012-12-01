define(function() {
    function bootstrapper() {
        try {
            curl(['wire!source/spectrum/bootstrapper.spec'], function(context) {
                // We should be good now!
            });
        }
        catch (error) {
            console.log("Error wiring the bootstrapper spec. Message: " + error + ".");
        }
    }

    return bootstrapper;
});