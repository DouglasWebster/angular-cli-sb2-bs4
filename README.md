# **SB Admin rewritten in Angular 2 and Bootstrap 4 using Angular-cli**
Framework for a simple dashboard app using angular 2 and Bootstrap 4

This project is a port of the famous Free Admin Bootstrap Theme [SB Admin v2.0](https://startbootstrap.com/template-overviews/sb-admin-2/) to Angular2 Theme and relies heavily on the [start-angular](http://rawgit.com/start-angular/SB-Admin-BS4-Angular-2/master/dist/prod/) port of SB Admin 2 for it's look and feel. 
 
This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24.

## SB Admin Bootstrap 4 provides the following features:
- Project built using Angular-cli.
- Ready to go, statically typed build system using webpack for working with TypeScript.
- Production and development builds.
- Ahead-of-Time compilation support.
- Sample unit tests with Jasmine and Karma including code coverage via istanbul.
- End-to-end tests with Protractor.
- Following the best practices for your application’s structure as determined by Angular-cli
- Has autoprefixer and css-lint support.

## Prerequisites
Both Angular-cli and the generated project have dependencies that require Node 4 or higher, together with NPM 3 or higher.

Angular-cli requires global installation by:
```bash
$ npm install -g angular-cli
```

**In order to start the seed use:**
```bash
$ git clone https://github.com/DouglasWebster/SBADBS4NG2
$ cd SBADBS4NG2
# install the project dependencies
$ npm install
```

**Using angular-cli**

***Development server***

Run ng serve for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

***Code scaffolding***

Run ng generate component component-name to generate a new component. You can also use ng generate directive/pipe/service/class/module.

***Build***

Run ng build to build the project. The build artifacts will be stored in the dist/ directory. Use the -prod flag for a production build.

***Running unit tests***

Run ng test to execute the unit tests via Karma.

***Running end-to-end tests***

Run ng e2e to execute the end-to-end tests via Protractor. Before running the tests make sure you are serving the app via ng serve.

***Further help***

To get more help on the angular-cli use ng help or go check out the Angular-CLI README.

Directory Structure

```
├── e2e
│   ├── app.e2e-spec.ts   <-- simple e2e test
│   ├── app.po.ts
│   └── tsconfig.json
├── src                        <- source code of the application
│    ├── app
│    │   ├── dashboard                          <-- main page for the application
│    │   │   ├── bs-components                          <-- demonstration of Bootstrap components
│    │   │   │   ├── bs-components.component.css
│    │   │   │   ├── bs-components.component.html
│    │   │   │   ├── bs-components.component.spec.ts
│    │   │   │   ├── bs-components.component.ts
│    │   │   │   └── bs-components.module.ts
│    │   │   ├── bs-elements                          <-- demonstration of Bootstrap elements
│    │   │   │   ├── bs-elements.component.css
│    │   │   │   ├── bs-elements.component.html
│    │   │   │   ├── bs-elements.component.spec.ts
│    │   │   │   ├── bs-elements.component.ts
│    │   │   │   └── bs-elements.module.ts
│    │   │   ├── charting                          <-- demonstration of ng-charts
│    │   │   │   ├── charting.component.css
│    │   │   │   ├── charting.component.html
│    │   │   │   ├── charting.component.spec.ts
│    │   │   │   ├── charting.component.ts
│    │   │   │   └── charting.module.ts
│    │   │   ├── forms                          <-- demonstration of forms
│    │   │   │   ├── forms.component.css
│    │   │   │   ├── forms.component.html
│    │   │   │   ├── forms.component.spec.ts
│    │   │   │   ├── forms.component.ts
│    │   │   │   └── forms.module.ts
│    │   │   ├── grid                          <-- demonstration of grid layouts
│    │   │   │   ├── grid.component.css
│    │   │   │   ├── grid.component.html
│    │   │   │   ├── grid.component.spec.ts
│    │   │   │   ├── grid.component.ts
│    │   │   │   └── grid.module.ts
│    │   │   ├── home                          <-- home component SB layout
│    │   │   │   ├── chat.html                 <-- additional chat boilerplate
│    │   │   │   ├── home.component.css
│    │   │   │   ├── home.component.html
│    │   │   │   ├── home.component.spec.ts
│    │   │   │   ├── home.component.ts
│    │   │   │   ├── home.module.ts
│    │   │   │   ├── notification.html         <-- additional notification boilerplate
│    │   │   │   ├── timeline.html             <-- additional timeline boilerplate
│    │   │   │   └── timeline.css
│    │   │   ├── tables                          <-- demonstration of tables
│    │   │   │   ├── tables.component.css
│    │   │   │   ├── tables.component.html
│    │   │   │   ├── tables.component.spec.ts
│    │   │   │   ├── tables.component.ts
│    │   │   │   └── tables.module.ts
│    │   │   ├── dashboard.component.css
│    │   │   ├── dashboard.component.html
│    │   │   ├── dashboard.component.spec.ts
│    │   │   ├── dashboard.component.ts
│    │   │   ├── dashboard.module.ts
│    │   │   ├── dashboard-routing.module.ts
│    │   │   └── index.ts
│    │   ├── login                           <-- boilerplate login page
│    │   │   ├── login.component.css
│    │   │   ├── login.component.html
│    │   │   ├── login.component.spec.ts
│    │   │   ├── login.component.ts
│    │   │   ├── login.module.ts
│    │   │   └── login-routing.module.ts
│    │   ├── shared                           <-- common components
│    │   │   ├── name-list                          <-- service supplying names
│    │   │   │   ├── name-list.service.spec.ts
│    │   │   │   └── name-list.service.ts
│    │   │   ├── sidebar                          <-- page sidebar component
│    │   │   │   ├── sidebar.component.css
│    │   │   │   ├── sidebar.component.html
│    │   │   │   ├── sidebar.component.spec.ts
│    │   │   │   ├── sidebar.component.ts
│    │   │   │   └── sidebar.module.ts
│    │   │   ├── topnav                          <-- page topnav component
│    │   │   │   ├── topnav.component.css
│    │   │   │   ├── topnav.component.html
│    │   │   │   ├── topnav.component.spec.ts
│    │   │   │   ├── topnav.component.ts
│    │   │   │   └── topnav.module.ts
│    │   │   └── shared.module.ts
│    │   ├── signup                           <-- boilerplate signup page
│    │   │   ├── signup.component.css
│    │   │   ├── signup.component.html
│    │   │   ├── signup.component.spec.ts
│    │   │   ├── signup.component.ts
│    │   │   ├── signup.module.ts
│    │   │   └── signup-routing.module.ts
│    │   ├── styles                           <-- local styles
│    │   │   └── sass 
│    │   │       └── app.scss 
│    │   ├── testing                           <-- items required to enable testing
│    │   │   └── router-stubs.ts
│    │   ├── app.component.html
│    │   ├── app.component.spec.ts
│    │   ├── app.component.ts
│    │   ├── app.module.ts
│    │   ├── app-routing.module.ts
│    │   └── index.ts
│    ├── assets                      <-- app assets for copying over
│    │   ├── img
│    │   │   ├── SB-admin.png
│    │   │   ├── slider0.jgp
│    │   │   ├── slider1.jgp
│    │   │   ├── slider2.jgp
│    │   │   ├── slider3.jgp
│    │   │   └── smile.png
│    │   ├── .gitkeep
│    │   └── data.json
│    ├── environments               <-- build environments for angular-cli
│    │   ├── environment.prod.ts
│    │   └── environment.ts
│    ├── .htaccess                  <-- used for apache.http testing
│    ├── favicon.ico
│    ├── index.html                 <-- app startup page
│    ├── main.ts                    <-- app entry point
│    ├── polyfills.ts
│    ├── stylels.css                <-- global styles
│    ├── test.ts                    <-- karma test environment
│    ├── tsconfig.json              <-- typescript settings
│    └── typings.d.ts               <-- additonal type definition 
├── .editorconfig              <-- configuration for the ide editor
├── angular-cli.json           <-- configuration for the angular-cli applicaton
├── karma.conf.js              <-- configuration for the test runner
├── licence.txt
├── package.json               <-- dependencies of the project
├── protractor.conf.js         <-- e2e tests configuration
├── README.md
├── tslint.json                <-- tslint configuration
└── vendor.ts                  <-- hack to get moments into webpack
