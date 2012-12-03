define(function() {
    
    var collection = null;
    
    function ShapeService(shapeCollection) {
        collection = shapeCollection;
    }

    ShapeService.prototype.getCollection = function() {
        return this.collection;
    };

    return ShapeService;
});

define(function() {
    
    var viewTemplate = "";
    var viewContainer = "";
    
    var View = function() {
        
        this.getTemplate = function () {
            return viewTemplate;
        };
        
        this.setTemplate = function (template) {
            viewTemplate = template;
        };
    
        this.getContainer = function () {
            return viewContainer;
        };
        
        this.setContainer = function (container) {
            viewContainer = container;
        };
    
        this.render = function () {
            this.getContainer().html('').append(this.getTemplate());
        }
    };

    View.prototype = {
        constructor: View
    };

    return View;
});