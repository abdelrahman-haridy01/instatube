**Instatube** is a videos app powered by [youtube API's](https://developers.google.com/youtube/v3/docs/) and [AngularJS](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md).

Author: Abdelrahman Haridy ([AbharWork](http://abharwork.com))

## Usage

1. Clone repo [git](https://git-scm.com/) or Download files:
    1. `git clone https://github.com/Abdelrahman-haridy/instatube`
    2. download [instatube.zip](https://github.com/Abdelrahman-haridy/instatube)

2. Install dependencies  via [npm](https://www.npmjs.com/) :
    1. `npm install`

2. Install dependencies  via [npm](https://www.npmjs.com/) :
    1. `npm install`

## Directory Layout

```
app/                    --> all of the source files for the application
    app.css               --> default stylesheet
    components/           --> all app specific modules
        channel/                --> the channel view template and logic
            channel.html            --> the partial template
            channel.js              --> the controller logic
            channel_test.js         --> tests of the controller
        main/                --> the main view template and logic
            main.html            --> the partial template
            main.js              --> the controller logic
            main_test.js         --> tests of the controller
        single/                --> the single view template and logic
            single.html            --> the partial template
            single.js              --> the controller logic
            single_test.js         --> tests of the controller
    css/                   --> all css files
        font-awesome.min.css   --> the font awesome css library
        styles.css             --> the compiled css file
    fonts/                  --> all fonts files
    img/                    --> all images files
    js/                   --> all css files
        angular-youtube-api-factory.min.js   --> the youtube-api library
    scss/                   --> all css files
        styles.scss            --> the development scss file
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
  index-async.html      --> just like index.html, but loads js files asynchronously
karma.conf.js         --> config file for running unit tests with Karma
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor
```
## Running the App during Development

The `Instatube` project comes preconfigured with a local development web server. It is a Node.js tool called [http-server](https://github.com/indexzero/http-server) and gulp automaition tool [gulp](https://gulpjs.com/) . You can start this web server with `gulp`

```
gulp
```
