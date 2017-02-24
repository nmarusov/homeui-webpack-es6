"use strict";

angular.module("homeuiApp")
  .value("AlertDelayMs", 5000)
  .controller("AlertCtrl", function ($scope, $timeout, AlertDelayMs) {
    var oldTimeout = null;
    $scope.visible = false;
    $scope.messageHtml = "";
    $scope.$on("$locationChangeSuccess", function () {
      $scope.visible = false;
    });
    $scope.$on("alert", function (ev, message, sticky) {
      if (oldTimeout !== null) {
        $timeout.cancel(oldTimeout);
        oldTimeout = null;
      }
      if (!message) {
        $scope.visible = false;
        return;
      }
      $scope.visible = true;
      $scope.messageHtml = $("<div/>").text(message).html().replace(/\n/g, "<br>");
      if (!sticky) {
        oldTimeout = $timeout(function () {
          oldTimeout = null;
          $scope.visible = false;
        }, AlertDelayMs);
      }
    });
  });
