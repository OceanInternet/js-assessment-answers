exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
    indexOf: function (arr, item) {

        return arr.indexOf(item);
    },

    sum: function (arr) {
        var sum = 0;

        for (var i = 0; i < arr.length; i++) {

            sum += arr[i];
        }

        return sum;
    },

    remove: function (arr, item) {

        while (arr.indexOf(item) !== -1) {
            arr.splice(arr.indexOf(item), 1);
        }

        return arr;
    },

    removeWithoutCopy: function (arr, item) {

        while (arr.indexOf(item) !== -1) {
            arr.splice(arr.indexOf(item), 1);
        }

        return arr;
    },

    append: function (arr, item) {

        arr.push(item);

        return arr;
    },

    truncate: function (arr) {
        arr.pop();

        return arr;
    },

    prepend: function (arr, item) {

        arr.unshift(item);

        return arr;
    },

    curtail: function (arr) {

        arr.shift();

        return arr;
    },

    concat: function (arr1, arr2) {

        return arr1.concat(arr2);
    },

    insert: function (arr, item, index) {

        arr.splice(index, 0, item);

        return arr;
    },

    count: function (arr, item) {

        var count = 0;

        while (arr.indexOf(item) !== -1) {

            arr.splice(arr.indexOf(item), 1);
            count++;
        }

        return count;

    },

    duplicates: function (arr) {

        var duplicates = [];

        while (arr.length) {

            var item = arr.pop();

            (arr.indexOf(item) !== -1) &&
            (duplicates.indexOf(item) === -1) &&
            duplicates.push(item);
        }

        return duplicates;
    },

    square: function (arr) {

        for (var i = 0; i < arr.length; i++) {

            arr[i] *= arr[i];
        }

        return arr;
    },

    findAllOccurrences: function (arr, target) {

        var occurrences = [];

        while (arr.indexOf(target) !== -1) {

            var index = arr.indexOf(target);

            occurrences.push(index + occurrences.length);
            arr.splice(index, 1);
        }

        return occurrences;
    }
};
