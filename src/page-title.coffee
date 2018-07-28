'use strict'

$uiRouterTitleDirective = ($timeout, $transitions) ->
  restrict: 'A'
  scope:
    ngModel: '='
  link: (scope, element, attrs) ->

    $transitions.onStart {}, (trans) ->

      getTitle = ->
        _title = if element[0].innerText then element[0].innerText else 'Default Title'
        return _title

      title = if trans.to().data and trans.to().data.pageTitle then trans.to().data.pageTitle else getTitle()

      $timeout (->
        element.text title
        return
      ), 0 , false
      return

    return

$uiRouterTitleDirective.$inject = ['$timeout', '$transitions']

angular.module 'uiRouterTitle', []
  .directive 'pageTitle', $uiRouterTitleDirective
