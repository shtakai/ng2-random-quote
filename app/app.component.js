/* global ng: true*/
(function (app) {
  var Component = ng.core.Component

  app.AppComponent = Component({
    selector: 'my-app',
    template:
      '<h1>simple</h1>' +
      '<random-quote></random-quote>' +
      '<show-time></show-time>'
  }).Class({constructor: function () {}})

})(window.app || (window.app = {}))
