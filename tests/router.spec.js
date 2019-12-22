const app = angular.module('app', ['uiRouterTitle', 'ui.router']);

const stateConfig = ($stateProvider) => {
  $stateProvider
    .state('home', {
      url: '/home',
      data: {
        pageTitle: 'Home',
      },
      template: '<div>Hello World</div>',
    });
};

stateConfig.$inject = ['$stateProvider'];
app.config(stateConfig);

describe('page-title directive', () => {
  beforeEach(module('app'));
  let $compile;
  let $rootScope;
  let $state;
  let $timeout;

  const defaultTitle = 'ui.router page title directive';

  beforeEach(inject(($injector) => {
    $compile = $injector.get('$compile');
    $rootScope = $injector.get('$rootScope');
    $state = $injector.get('$state');
    $timeout = $injector.get('$timeout');
  }));

  it('should respond to the url', () => {
    expect($state.href('home')).toEqual('#!/home');
  });

  it('should set the title correctly after navigation', () => {
    const template = `<title page-title>${defaultTitle}</title>`;
    const element = $compile(template)($rootScope);
    $rootScope.$digest();

    $state.go('home');
    $timeout.flush();
    $rootScope.$digest();
    expect($state.current.name).toBe('home');
    expect(element.html()).toBe('Home');
  });
});
