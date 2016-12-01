exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {

    var counter = {},
        count = start,
        timer = setInterval(doCount, 100);

    counter.cancel = cancel;

    return counter;

    function doCount() {
      console.log(count);
      count++;
      (count > end) && clearInterval(timer)
    }

    function cancel() {

      (timer !== null) && clearInterval(timer);
      timer = null;
    }
  }
};
