define(['source/common/infrastructure/module'], function(module) {
    
    statModule.prototype = new module();
    
    function statModule(moduleA) {
        try {
            curl(['wire!source/modules/formModule/formModule.spec']);
        }
        catch (error) {
            console.log("Error wiring the statModule spec. Message: " + error + ".");
        }
    }

    return statModule;
});