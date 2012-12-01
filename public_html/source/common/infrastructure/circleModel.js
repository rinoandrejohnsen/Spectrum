define(['source/common/infrastructure/model'], function(model) {
    
    circleModel.prototype = Object.create(model.prototype);
    
    function circleModel(color) {
        // Run the model constructor within circleModel to share the same initialization logic
        model.call(this, color);
    }

    return circleModel;
});