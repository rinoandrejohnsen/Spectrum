define(['source/common/infrastructure/module'], function(module) {
    
    formModule.prototype = new module();
        
    function formModule(service) {
        try {
            curl(['wire!source/modules/formModule/formModule.spec']);
        }
        catch (error) {
            console.log("Error wiring the formModule spec. Message: " + error + ".");
        }
    };

    return formModule;
});