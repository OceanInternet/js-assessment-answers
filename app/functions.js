exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {

    return fn.apply(null, arr);
  },

  speak: function(fn, obj) {

    return fn.apply(obj);
  },

  functionFunction: function(str) {

    result = [];
    result.push(str);

    return function (str) {

      result.push(str);

      return result.join(', ');
    }
  },

  makeClosures: function(arr, fn) {

    var closures = [];

    for(var i=0;i<arr.length;i++) {

      closures.push(function () {

        var val = arr[i];
        return fn(val);
      });
    }

    return closures;
  },

  partial: function(fn, str1, str2) {

    return function (str3) {

      return fn(str1, str2, str3);
    }
  },

  useArguments: function() {

    var sum = 0;

    for(var i=0; i<arguments.length; i++) {
      sum += arguments[i];
    }

    return sum;
  },

  callIt: function(fn) {

    arguments.slice(0,1);

    fn.apply(null, args);
  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }
};
