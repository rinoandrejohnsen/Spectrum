define(function() {
    function test() {
        function dec() {
            if (secret > 0) {
                secret -= 1;
                return true;
            } else {
                return false;
            }
        }

        this.member = "4";
        var secret = 3;
        var that = this;

        this.service = function() {
            return dec() ? that.member : null;
        };
    }

    test.prototype;

    return test;
});