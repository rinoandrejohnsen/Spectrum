define(['source/common/infrastructure/circlemodel'], function(CircleModel) {
    function formController(view, collection) {
        this.elements = view.elements;
        this.collection = collection;
    }

    formController.prototype.addItem = function(item) {
        
        var circleModel = new CircleModel();
        
        this.collection.addItem(item);
    };

    return formController;
});