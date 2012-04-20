Object.prototype.super = function(fName) {
    var that = this;
    var f = that[fName];

    return function() {
        return f.apply(that, arguments);
    };
};