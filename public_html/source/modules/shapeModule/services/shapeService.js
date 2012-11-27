define(function() {

    function ShapeService(shapeCollection, test) {
        debugger;
        this.collection = shapeCollection;
    }

    ShapeService.prototype.getCollection = function() {
        return this.collection;
    };

    return ShapeService;
});