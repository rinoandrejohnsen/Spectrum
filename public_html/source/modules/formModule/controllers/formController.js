define(function() {
    function formController(view, collection) {
        this.elements = view.elements;
        this.collection = collection;
    }

    formController.prototype.addItem = function(item) {
        this.collection.addItem(item);
    };

    return formController;
});