This project for developing a simple angular2 project and deploing the same into webserver.



install nodejs from https://nodejs.org
Add the path to PATH system variable
create direcotory for your project
cd to the project direcotory
npm init => this creates a packag.json file in the direcotory

create the following files, copy the content from any project

package.json       : Lists packages that our app will depend on and defines some useful scripts.
tsconfig.json      : Is a TypeScript compiler configuration file
typings.json       : Identifies TypeScript definition files
systemjs.config.js : The SystemJS configuration file.

npm install
create index.html in root folder, main.ts and app.component.js in app folder.
you can start the application npm start.  This will start the apps in 3000 port

deployment:

 npm install --save-dev webpack
 npm install --save-dev ts-loader

 create config file,  webpack.config.js
 
 $(npm bin)/webpack --progress => this will create dist foler
 Add import to min.ts (core-ts, reflect-metadata, zone.js/dis/zone) 
 Change the index.html to point to dist/app.bundle.js
 npm install --save-dev html-webpack-plugin
 add the html-webpack-plugin into webpack.cofig.js 

 remove the app.bundle reference in index.html

 to generate files in production mode 
  $(npm bin)/webpack -p --progress
  this create dist folder witj index.html and js file

copy the dist folder content to webserver



 




