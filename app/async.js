exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
    async: function (value) {

        return new Promise(function (resolve) {

            resolve(value);
        });
    },

    manipulateRemoteData: function (url) {

        return new Promise(function (resolve) {

            httpRequest = new XMLHttpRequest();
            httpRequest.onreadystatechange = sendNames;
            httpRequest.open('GET', url);
            httpRequest.send(null);

            function sendNames() {

                if (httpRequest.readyState === XMLHttpRequest.DONE) {
                    var response = JSON.parse(httpRequest.responseText),
                        people = response.people,
                        names = [];

                    for (var i = 0; i < people.length; i++) {

                        names.push(people[i].name);
                    }

                    names.sort();

                    resolve(names);
                }
            }
        });
    }
};
