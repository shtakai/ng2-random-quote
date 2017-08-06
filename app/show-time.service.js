/* global ng: true*/
(function (app) {
  var Class = ng.core.Class

  app.ShowTimeService = Class({
    constructor: function ShowTimeService() {
      this.now = Date.now()
    },
    setTime: function() {
      this.now = Date.now()
    },
    updateTime: function(delay, callback) {
      var self = this
      setTimeout(function() {
        callback(self.setTime())
      }, delay)
    }
  })

})(window.app || (window.app = {}))
