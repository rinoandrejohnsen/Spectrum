define(function() {
    function bootstrapper() {
        try {
            curl(['wire!source/spectrum/bootstrapper.spec'], function(context) {
                // We should be good now!

                context.wire({
                    shapeModule: {
                        wire: {
                            spec: 'source/modules/shapeModule/shapeModule.spec'
                        }
                    }
                }).then(function(childContext) {
                    childContext.wire({
                        formModule: {
                            create: {
                                module: 'source/modules/formModule/formModule',
                                args: [
                                    {$ref: 'shapeModule.shapeService'}
                                ]
                            }
                        }
                    }).then(function(child2Context) {
                        child2Context.wire({
                            statModule: {
                                create: {
                                    module: 'source/modules/statModule/statModule',
                                    args: [
                                        {$ref: 'shapeModule.shapeService'}
                                    ]
                                }
                            },
                        }).then(function(child2Context) {

                        });
                    });
                });
            });
        }
        catch (error) {
            console.log("Error wiring the bootstrapper spec. Message: " + error + ".");
        }
    }

    return bootstrapper;
});