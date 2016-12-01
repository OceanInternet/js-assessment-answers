exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
    createModule: function (str1, str2) {

        var module = {};

        module.name = 'matt';
        module.greeting = 'hello';
        module.sayIt = sayIt;

        return module;

        function sayIt() {

            return module.greeting + ', ' + module.name;
        }
    }

};
