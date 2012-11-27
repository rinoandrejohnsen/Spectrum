define(['source/common/infrastructure/module'], function(module) {
    
    statModule.prototype = new module();
    
    function statModule(service) {
        try {
            curl(['wire!source/modules/statModule/statModule.spec']);
        }
        catch (error) {
            console.log("Error wiring the statModule spec. Message: " + error + ".");
        }
    }

    return statModule;
});