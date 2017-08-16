import { app } from './app';

class uiRouterTitleDirective implements ng.IDirective {
    public restrict = 'A';
    public link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void;
    public scope = {
        ngModel: '='
    };

    constructor(private $timeout: ng.ITimeoutService, private $transitions) {
        uiRouterTitleDirective.prototype.link = (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => {
            $transitions.onStart({}, function (trans) {

                let title;
                title = (trans.to().data && trans.to().data.pageTitle) ? trans.to().data.pageTitle : getTitle();
                title = title;

                $timeout(function () {
                    element.text(title);
                }, 0, false);

            });

            const getTitle = function () {
                return element[0].innerText ? element[0].innerText : 'Default Title'
            }

        };
    }

    public static Factory(): ng.IDirectiveFactory {
        const directive = ($timeout: ng.ITimeoutService, $transitions) => new uiRouterTitleDirective($timeout, $transitions);

        directive['$inject'] = ['$timeout', '$transitions'];
        return directive;
    }
}

app.directive('pageTitle', uiRouterTitleDirective.Factory());