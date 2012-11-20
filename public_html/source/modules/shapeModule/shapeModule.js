define(['source/common/infrastructure/model'], function(model) {
    
    //shapeModule.prototype = new model(['PHP', 'JavaScript']);

    function shapeModule(shapeRegion) {
        //debugger;
        try {
            curl(['wire!source/modules/shapeModule/shapeModule.spec'], function(context) {
                context.wire({
//                    shelli: {
//                            render: {
//                            template: {module: 'text!source/modules/shapeModule/resources/templates/circleTemplate.html'},
//                            css: {module: 'css!source/modules/shapeModule/resources/styles/circleStyle.css'}
//                        },
//                        insert: {at: 'dom.first!body'}  
//                    },
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