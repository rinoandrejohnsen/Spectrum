define(['source/common/infrastructure/observableCollection'], function(ObservableCollection) {
    
    ShapeCollection.prototype = Object.create(ObservableCollection.prototype);
    
    function ShapeCollection() {
        // Run the model constructor within circleModel to share the same initialization logic
        ObservableCollection.call(this);
    }
    
    ShapeCollection.prototype.addCircle = function(circle) {
        this.addItem(circle);
    };
    
    return ShapeCollection;
});