define(function() {

    function ShapeService(shapeCollection, test) {
        this.collection = shapeCollection;
    }

    ShapeService.prototype.getCollection = function() {
        return this.collection;
    };

    return ShapeService;
});