# CHANGELOG

All notable changes to this project will be documented in this file.

> **Tags**
> - Features
> - Bug Fixes
> - Performance Improvements
> - Dependency Updates
> - Breaking Changes
> - Documentation
> - Internal

## Unreleased

#### Internal

* run travis builds with trusty enabled ([22d6ddc](https://github.com/Sibiraj-S/ui-router-page-title/commit/22d6ddc))
* add eslint to lint files ([27f7e51](https://github.com/Sibiraj-S/ui-router-page-title/commit/27f7e51))
* add standardJs rules to eslint ([24b8902](https://github.com/Sibiraj-S/ui-router-page-title/commit/24b8902))

#### Dependency Updates

* update eslint to v5.5.0 ([2cf03d0](https://github.com/Sibiraj-S/ui-router-page-title/commit/2cf03d0))
* update grunt-contrib-uglify to v4.0.0 ([2cf03d0](https://github.com/Sibiraj-S/ui-router-page-title/commit/2cf03d0))
* update grunt-coffeelintr to v1.1.1 ([3ef6c0c](https://github.com/Sibiraj-S/ui-router-page-title/commit/3ef6c0c))

## v1.0.8 (2018-07-28)

Just a Maintenance Patch

#### Internal

* source code re-written form typescript to coffee ([47635c3](https://github.com/Sibiraj-S/ui-router-page-title/commit/47635c3))
* mark repo as private to prevent accidental publish to npm registry
* add prepublish check
* added grunt-eslint to lint javascript files
* remove typescript related devDpendencies
* remove commitizen and cz-conventional-changelog from dependencies
* add gurnt-coffeelintr to validate coffescript

## v1.0.7 (2018-07-13)

#### Internal

* verify compatibility with angular 1.7.2
* update devDependencies
* pullapprove removed

## v1.0.6 (2018-05-08)

Just a Maintenance Release.

#### Dependency Updates

* update devDependencies ([8c8a259](https://github.com/Sibiraj-S/ui-router-page-title/commit/8c8a259))

## v1.0.5 (2018-03-27)

#### Internal

* add shebang line to shell scripts ([8e5814c](https://github.com/Sibiraj-S/ui-router-page-title/commit/8e5814c))
* add post build scripts ([dfc896b](https://github.com/Sibiraj-S/ui-router-page-title/commit/dfc896b))
* remove deprecated `typeof-compare` tslint rule ([42e8e6d](https://github.com/Sibiraj-S/ui-router-page-title/commit/42e8e6d))

#### Dependency Updates

* update devDependencies ([a1c4504](https://github.com/Sibiraj-S/ui-router-page-title/commit/a1c4504))

## v1.0.4 (2017-11-28)

#### Internal

* publish only `dist/` folder to npm
* move dependencies to peerDependencies

#### Dependency Updates

* update angular.js to v1.6.7
* update grunt-contrib-uglify to v3.2.1

#### Breaking Changes

* bower installations will not be supported anymore, use npm or yarn

## v1.0.3 (2017-11-08)

#### Internal

* lint the ts source file ([5c403db](https://github.com/Sibiraj-S/ui-router-page-title/commit/5c403db))
* webpack is replaced with grunt for development ([5c403db](https://github.com/Sibiraj-S/ui-router-page-title/commit/5c403db))
* update tslint rules ([8bc3e30](https://github.com/Sibiraj-S/ui-router-page-title/commit/8bc3e30))

#### Documentation

* add docs ([9276c93](https://github.com/Sibiraj-S/ui-router-page-title/commit/9276c93))

## v1.0.2 (2017-08-17)

#### Internal

* fix dependency mismatch between package.json and bower.json

## v1.0.1 (2017-08-17)

#### Documentation

* update links in README.md

## v1.0.0 (2017-08-16)

#### Features

Initial Release. Dynamic Page Title for AngularJs pages using angular-ui.router