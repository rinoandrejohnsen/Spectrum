define(['source/common/infrastructure/module'], function(module) {
    
    formModule.prototype = new module();
        
    function formModule(service) {
        
        var rino = service.getCollection();
        
        rino.addItem("circle");
        rino.addItem("circle2");
        rino.addItem("circle3");
        //var rino = service.getCollection();
        
        try {
            curl(['wire!source/modules/formModule/formModule.spec']);
        }
        catch (error) {
            console.log("Error wiring the formModule spec. Message: " + error + ".");
        }
    };

    return formModule;
});