# **SB Admin rewritten in Angular 2 and Bootstrap 4 using Angular-cli**

[![Greenkeeper badge](https://badges.greenkeeper.io/DouglasWebster/angular-cli-sb2-bs4.svg)](https://greenkeeper.io/)
Framework for a simple dashboard app using angular 2 and Bootstrap 4

This project is a port of the famous Free Admin Bootstrap Theme [SB Admin v2.0](https://startbootstrap.com/template-overviews/sb-admin-2/) to Angular Theme and relies heavily on the [start-angular](http://rawgit.com/start-angular/SB-Admin-BS4-Angular-2/master/dist/prod/) port of SB Admin 2 for it's look and feel. 
 
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## SB Admin Bootstrap 4 provides the following features:
- Project uses Angular 4.
- Project built using Angular-cli.
- Ready to go, statically typed build system using webpack for working with TypeScript.
- Production and development builds.
- Ahead-of-Time compilation support.
- Sample unit tests with Jasmine and Karma including code coverage via istanbul.
- End-to-end tests with Protractor (not yet implemented).
- Following the best practices for your application’s structure as determined by Angular-cli
- Has autoprefixer and css-lint support.

## Prerequisites
Both Angular-cli and the generated project have dependencies that require Node 4 or higher, together with NPM 3 or higher.

Angular-cli requires global installation by:
```bash
$ npm install -g @angular/cli
```

**In order to start the seed use:**
```bash
$ git clone https://github.com/DouglasWebster/Angular_cli-SB2-BS4
$ cd Angular_cli-SB2-BS4
# install the project dependencies
$ npm install
```

**Using angular-cli**

***Development server***

Run ng serve for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

***Running unit tests***

Run ng test to execute the unit tests via Karma.

***Further help***

The above 2 commands allow the user to get a feel of the project but for furter development the user should be familiar with the full range of angular-cli commands.  
To get more help on the angular-cli use ng help or check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### **Directory Structure**
```
├── e2e
│   ├── app.e2e-spec.ts             <-- simple e2e test
│   ├── app.po.ts
│   └── tsconfig.e2e.json
├── src                       <- source code of the application
│    ├── app
│    │   ├── dashboard              <-- main page for the application
│    │   │   ├── bs-components         <-- demonstration of NG2-Bootstrap components
│    │   │   │   ├── accordion-sample
│    │   │   │   │   ├── accordion-sample.component.scss
│    │   │   │   │   ├──        --- || ---
│    │   │   │   │   └── accordion-sample.component.ts
│    │   │   │   ├──            --- || ---              <-- various NG2-Bootstrap components    
│    │   │   │   ├── typeahead-sample
│    │   │   │   │   ├── typeahead-sample.component.scss
│    │   │   │   │   ├──        --- || ---
│    │   │   │   │   └── typeahead-sample.component.ts
│    │   │   │   ├── bs-components.component.scss
│    │   │   │   ├── bs-components.component.html
│    │   │   │   ├── bs-components.component.spec.ts
│    │   │   │   ├── bs-components.component.ts
│    │   │   │   └── bs-components.module.ts
│    │   │   ├── bs-elements           <-- demonstration of Bootstrap elements
│    │   │   │   ├── bs-elements.component.scss
│    │   │   │   ├── bs-elements.component.html
│    │   │   │   ├── bs-elements.component.spec.ts
│    │   │   │   ├── bs-elements.component.ts
│    │   │   │   └── bs-elements.module.ts
│    │   │   ├── charting              <-- demonstration of ng-charts
│    │   │   │   ├── charting.component.scss
│    │   │   │   ├── charting.component.html
│    │   │   │   ├── charting.component.spec.ts
│    │   │   │   ├── charting.component.ts
│    │   │   │   └── charting.module.ts
│    │   │   ├── forms                 <-- demonstration of forms
│    │   │   │   ├── forms.component.scss
│    │   │   │   ├── forms.component.html
│    │   │   │   ├── forms.component.spec.ts
│    │   │   │   ├── forms.component.ts
│    │   │   │   └── forms.module.ts
│    │   │   ├── grid                  <-- demonstration of grid layouts
│    │   │   │   ├── grid.component.scss
│    │   │   │   ├── grid.component.html
│    │   │   │   ├── grid.component.spec.ts
│    │   │   │   ├── grid.component.ts
│    │   │   │   └── grid.module.ts
│    │   │   ├── home                  <-- home component SB layout
│    │   │   │   ├── chat.html            <-- additional chat boilerplate
│    │   │   │   ├── home.component.scss
│    │   │   │   ├── home.component.html
│    │   │   │   ├── home.component.spec.ts
│    │   │   │   ├── home.component.ts
│    │   │   │   ├── home.module.ts
│    │   │   │   ├── notification.html    <-- additional notification boilerplate
│    │   │   │   ├── timeline.html        <-- additional timeline boilerplate
│    │   │   │   └── timeline.scss
│    │   │   ├── tables                   <-- demonstration of tables
│    │   │   │   ├── tables.component.scss
│    │   │   │   ├── tables.component.html
│    │   │   │   ├── tables.component.spec.ts
│    │   │   │   ├── tables.component.ts
│    │   │   │   └── tables.module.ts
│    │   │   ├── dashboard.component.scss
│    │   │   ├── dashboard.component.html
│    │   │   ├── dashboard.component.spec.ts
│    │   │   ├── dashboard.component.ts
│    │   │   ├── dashboard.module.ts
│    │   │   ├── dashboard-routing.module.ts
│    │   │   └── index.ts
│    │   ├── login                     <-- boilerplate login page
│    │   │   ├── login.component.scss
│    │   │   ├── login.component.html
│    │   │   ├── login.component.spec.ts
│    │   │   ├── login.component.ts
│    │   │   ├── login.module.ts
│    │   │   └── login-routing.module.ts
│    │   ├── shared                 <-- common components
│    │   │   ├── name-list             <-- service supplying names
│    │   │   │   ├── name-list.service.spec.ts
│    │   │   │   └── name-list.service.ts
│    │   │   ├── sidebar               <-- page sidebar component
│    │   │   │   ├── sidebar.component.scss
│    │   │   │   ├── sidebar.component.html
│    │   │   │   ├── sidebar.component.spec.ts
│    │   │   │   ├── sidebar.component.ts
│    │   │   │   └── sidebar.module.ts
│    │   │   ├── topnav                <-- page topnav component
│    │   │   │   ├── topnav.component.scss
│    │   │   │   ├── topnav.component.html
│    │   │   │   ├── topnav.component.spec.ts
│    │   │   │   ├── topnav.component.ts
│    │   │   │   └── topnav.module.ts
│    │   │   └── shared.module.ts
│    │   ├── signup                    <-- boilerplate signup page
│    │   │   ├── signup.component.scss
│    │   │   ├── signup.component.html
│    │   │   ├── signup.component.spec.ts
│    │   │   ├── signup.component.ts
│    │   │   ├── signup.module.ts
│    │   │   └── signup-routing.module.ts
│    │   ├── styles                    <-- local styles
│    │   │   └── sass 
│    │   │       └── app.scss 
│    │   ├── testing                   <-- items required to enable testing
│    │   │   └── router-stubs.ts
│    │   ├── app.component.html
│    │   ├── app.component.spec.ts
│    │   ├── app.component.ts
│    │   ├── app.module.ts
│    │   ├── app-routing.module.ts
│    │   └── index.ts                  <-- barrel component
│    ├── assets                     <-- app assets for copying over
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
│    ├── stylels.scss               <-- global styles
│    ├── test.ts                    <-- karma test environment
│    ├── tsconfig.app.json          <-- typescript settings for build
│    └── tscongig.spec.ts           <-- typescript settings for testing
├── .angular-cli.json          <-- configuration for the angular-cli applicaton
├── .editorconfig              <-- configuration for the ide editor
├── .gitignore                 <-- files not under git versioning 
├── .travis.yml                <-- Travis test script
├── karma.conf.js              <-- configuration for the test runner
├── licence.txt
├── package.json               <-- dependencies of the project
├── protractor.conf.js         <-- e2e tests configuration
├── README.md
├── tsconfig.json              <-- root typescript configuration
├── tslint.json                <-- tslint configuration
└── vendor.ts                  <-- hack to get moments into webpack
```
----------
### **Notes**
- **Look and Feel**
    The ng2-bootstrap package is used to implement most of the bootstrap functionality and much of the look and feel is based on [NG2 Demo](http://valor-software.com/ng2-bootstrap/#/).  Ng2-bootstrap is designed to work with both Bootstrap 3 and Bootstrap 4 whilst this project is developed using Bootstrap 4 only.  As Bootstrap 4 is dropping support for glyphicons I chose to use font-awesome throughout the project so you may notice differences between icons on the  ng2-bootstrap demo pages and this projects demo pages. 
       
- **Charting**
   
   The original StartBootstrap SB2 uses jQuery charting plugins, Flot Charts and Morris.js and the StartAngular version uses Highcharts.  This implementation uses ng2-charts which is based on the chart.js.   
   
   The primary reason for this is that chart.js and ng2-charts are free open source whilst Highcharts requires a licence for commercial use. Being unsure how possible downstream use of this project would impact licensing issues I decided to change the charting package used.  A secondary consideration was that ng2-charts is an angular 2 module which should make implementation easier.  However, ng2-charts is still in development so breaking changes may occur if the package is updated.

- **Navigation**
   
    .htaccess is included in the root directory of the app for inclusion in the build.  This is to allow navigation without using *HashLocationStrategy* in the my local Apache http test server.  
   
    I haven't tried navigation in anything other than the default angular-cli server implementation and the Apache http server so I cannot guarantee navigation will work without a similar workaround.
    It took me quite a while to find out what the problem was with navigating in Apache until I came across this solution [Angular2 routing / deep linking not working with Apache 404](http://stackoverflow.com/questions/34816025/angular2-routing-deep-linking-not-working-with-apache-404) on stackoverflow - hopefully the link will help with others of you who, like me, aren't familiar enough with Apache to set up a local test server correctly to allow html5 navigation. 
    
    *(I realise that this has generated a big discussion on the angular site regarding front-end or back-end configuration responsibility but as angular seems to favour html5 routing this is the one I've gone with.  The framework is still relatively shallow as far as routing is concerned so it shouldn't be too onerous to change it to # routing if you so require).* 

- **Style Sheets**

    The style sheets have all been included by reference in the angular-cli.json styles section.  I did consider extracting the stylesheets and including them in one common styles folder and referencing them in the root styles.scss file.  However, I seem to have problems loading style sheets via styles.scss so use the current method.

    For the bootstrap and font-awesome css files the current method seems to me to be the correct one as any updates in the future are automatically catered for.  The inclusion of  app.scss in this was does seem wrong to me though and this may change in the future if I can discover where my mistake is.
    
- **Unit Testing**

   There are full full set test suites.  Some are bare bone implementations only and do little else than assert that a component has been created.  Others do a rather better job of component and service testing and implent the use of such things as mocking services and use mock backend features.
    
 ----------
### **Hacks**
Thankfully there aren't too many of these considering the very fluid nature of the angular scene at the moment.  The following are ones I have had to use to get the application running.

- **app.scss**
   
   As mentioned in the Look and Feel section glyphicons are not included in the package.  However ng2-bootstrap does use the .glyphicon-remove-circle as the close symbol in the tabs module and .glyphicon-chevron-up/down in the timepicker module.
   Not having the glyphicon file loaded meant that the close behaviour didn't work as there was no icon to click on.  To overcome this the first section of app.scss first redefines the glyphicon halfings font family to point to the font-awesome font files, then redefines .glyphicon to FontAwesome and finally points .glyphicon-xxx to the nearest font-awesome icon.
   This seems far from ideal and if anyone has a better solution I'm always willing to implement it.
- **bs-component**
    
    This component has a large (probably too large) number of children that demonstrates most of the ng2-bootstrap functionality. This component initially had all the different modules on one page and this did highlight one problem with the inclusion of the *changeDetectionStrategy.OnPush* required by the tabs component.

    If the *changeDetectionStrategy.OnPush* is included with the Pager module then the pager display is on click behind the actual number of clicks.  This is only a problem when the Tabs module and the Pagination module are required on the same page.  
 
## **Acknowledgements**

I would like to say thank you to the people at valour-software for some excellent packages that made implementing this project far easier than it would have been using the basic chart.js and bootstrap packages.  Also, the people at StartAngular for putting SB2 out there.   