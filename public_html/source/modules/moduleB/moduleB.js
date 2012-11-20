define(['source/common/infrastructure/module'], function(module) {
    
    moduleB.prototype = new module();
    
    function moduleB(moduleA, service) {
        service();
    }

    return moduleB;
});