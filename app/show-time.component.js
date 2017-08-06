/* global ng: true*/
(function (app) {
  var Component = ng.core.Component
  var ShowTimeService = app.ShowTimeService

  app.ShowTimeComponent = Component({
    selector: 'show-time',
    template: '<h3>{{now}}</h3>'
  }).Class({
    constructor: [ShowTimeService, function ShowTimeComponent(showTimeService) {
      var self = this
      showTimeService.updateTime(1000, function() {
        self.now = showTimeService.now
      })
    }]
  })

})(window.app || (window.app = {}))
