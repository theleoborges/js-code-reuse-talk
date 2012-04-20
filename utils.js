var utils = {};
utils.enumerable = {
    reduce: function(acc, f) {
        for (var i = 0; i < this.length; i++) {
            acc = f(acc, this[i]);
        }
        return acc;
    },
    map: function(f) {
        var result = [];
        for (var i = 0; i < this.length; i++) {
            result.push(f(this[i]));
        }
        return result;
    }
};

utils.extends = function(dest, source) {
    for (var prop in source) {
        if (source.hasOwnProperty(prop)) {
            dest[prop] = source[prop];
        }
    }
};

utils.partial = function(f) {
    var sourceArgs = Array.prototype.slice.apply(arguments, [1]);
    return function() {
        var actualArgs = Array.prototype.concat.apply(sourceArgs, arguments);
        return f.apply(null, actualArgs);
    };
};

utils.comp = function() {
    var functions = Array.prototype.slice.apply(arguments, [0]);
    return function() {
        var result = functions.reduce(arguments, function(r, f) {
            return [f.apply(null, r)];
        });
        return result[0];

    };
};

utils.split = function(str) {
    return String.prototype.split.apply(str, [""]);
};

utils.reverse = function(array) {
    return Array.prototype.reverse.apply(array);
};

utils.join = function(array) {
    return Array.prototype.join.apply(array, [""]);
};


utils.extends(Array.prototype, utils.enumerable);