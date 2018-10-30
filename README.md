Weather Forecast Demo is created using angularjs-webpack-seed (seed-webapp-1.0)
## Tooling
The following tools are used in the application

- [AngularJS][] - as the Front-End framework
- [Webpack][] 2 - Module loader / bundler, primary build tool
- [Node][] 6  - local development and build time JavaScript runtime
- [Yarn][] - package manager for build and application dependencies

[Node]: https://nodejs.org/
[Yarn]: https://yarnpkg.com/en/
[AngularJS]: https://angularjs.io/
[Webpack]: https://webpack.github.io/

Recommended plugins to have are:
- Git (can show changed lines in the gutter when viewing a file)
- EditorConfig
- gitignore
- Sass
- NodeJS

### Installation

1. If you don't already have it, download and install NodeJS (which comes with NPM)
2. This project favors Yarn, so make sure you have the expected version by installing it after installing Node

```
$ npm install -g yarn@0.21.3
```

3) Now install the build and application dependencies by running `$ yarn install`

## Project Layout
An overview of important files and configurations for the applications

### Root Files
Also know as "dot" files, these are the build and build configuration files for the application

* _bin/_ - shell scripts for continuous and build environments
* _.editorconfig_ - configuration file for EditorConfig IDE plugin
* _.eslintrc_ - configuratin file for [ESLint](http://eslint.org/)
* _package.json_ - dependency configuration file, for project related dependencies and defines all runnable scripts and commands
* _webpack.config.common.js_ - webpack config for managing shared webpack configurations
* _webpack.config.develop.js_ - webpack config for local development
* _webpack.config.prod.js_ - webpack config for production builds

### Application Files
Application code, including unit tests.  Directories are intended to be kept as flat as possible with a B.O.F. (birds of
a feather) organization.
* _src_ - application code
* _src/components/_ - resusable UI features, typically directives.  A `BootstrapComponent` has been designated to manage starting up the application, from _index.js_
* _src/services/_ -  APIs for handling backend REST APIs or browser APIs, non UI related "helpers"
* _src/views/_ -  routable states ("pages"), generally exposed with `class` controllers. Some are configured to [lazy load](https://github.com/kenzanmedia/angularjs-webpack-seed/wiki#lazy-loading).
* _src/index.html_ - main layout of the application
* _src/index.js_ - main entry way into the application and pulls in the application's `BootstrapComponent`
* _src/routes.js_ - routes for the application, maps to different views
* _src/vendor.js_ - vendor files from _node_modules_

## Tasks
This project uses Webpack as the build tool, executed via NPM scripts.  All available tasks are in the `scripts`
section of _package.json_

### Development
This will start up a Node (Express) server which watches for changes and "redeploys" as needed.

```bash
$ yarn run develop
```

See it in a browser by opening up

```
http://localhost:6789/
```

**Note: This task exports** `NODE_ENV=development`

### Production
This is the production build task for the project.  It is used prior to deploying to an environment and builds a
production version of the application.

```bash
$ yarn run build

### Serve / Run
To serve a production build locally, like for a demo run:

```bash
$ yarn run serve
```

**Note: it is recommended you run this command from the master branch or a tag.  By Default this proxies with the
 webpack-dev-server proxy.**

### Analyze
Start a local webserver to show a visualization of bundle statistics:

```bash
$ yarn run analyze
```

**Note**: You must run the build task before analyzing.

## Dependency Management
Build packages (like Webpack) are installed through Yarn into _package.json_, using

```bash
$ yarn add <package-name>  --dev
```

Dependencies for the application (like Angular) are installed by running

```bash
$ yarn add <package-name>
```