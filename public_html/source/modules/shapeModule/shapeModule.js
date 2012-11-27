define(['source/common/infrastructure/observableCollection'], function(Collection) {
    
    //shapeModule.prototype = new model(['PHP', 'JavaScript']);

    function shapeModule() {      
        try {
            curl(['wire!source/modules/shapeModule/shapeModule.spec'], function(context) {
                debugger;
                
                context.wire({
                    plugins: [
                        {
                            module: 'wire/debug', 
                            trace: {pointcut: /^((?!(model$|constructor$|_)).*)$/}
                        },
                        {
                            module: 'wire/dom', 
                            classes: {init: 'loading'}
                        },
                        {module: 'wire/dom/render'}
                    ]
                }).then(function(childContext) {
                    console.log(childContext);
                });
            });
        }
        catch (error) {
            console.log("Error wiring the bootstrapper. Message: " + error + ".");
        }
    }
    
    return shapeModule;
});