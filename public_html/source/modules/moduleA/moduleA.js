define(['source/common/infrastructure/module'], function(module) {
    
    moduleA.prototype = new module();
    
    var circleService = null;
    
    function moduleA() {
        circleService = "rino2";
    };

    moduleA.prototype.service = function() {
        console.log(circleService);
    };

    return moduleA;
});