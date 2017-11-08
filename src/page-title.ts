let app = angular.module('uiRouterTitle', []);

class UiRouterTitleDirective implements ng.IDirective {
    public restrict = 'A';
    public link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void;
    public scope = {
        ngModel: '='
    };

    constructor(private $timeout: ng.ITimeoutService, private $transitions) {
        UiRouterTitleDirective.prototype.link = (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => {

            /*
             * set title when the transition starts
             */
            $transitions.onStart({}, function (trans) {

                let title;
                title = (trans.to().data && trans.to().data.pageTitle) ? trans.to().data.pageTitle : getTitle();
                title = title;

                $timeout(function () {
                    element.text(title);
                }, 0, false);

            });

            /*
             * if the title isn't provided get set the title from title element
             * or set 'Default Title'
             */
            const getTitle = function () {
                return element[0].innerText ? element[0].innerText : 'Default Title';
            };

        };
    }

    public static Factory(): ng.IDirectiveFactory {
        const directive = ($timeout: ng.ITimeoutService, $transitions) => new UiRouterTitleDirective($timeout, $transitions);

        directive['$inject'] = ['$timeout', '$transitions'];
        return directive;
    }
}

app.directive('pageTitle', UiRouterTitleDirective.Factory());
