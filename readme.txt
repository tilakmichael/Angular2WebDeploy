http://www.geekhours.com/2016/07/25/creating-your-first-angular-2-app-detailed-step-by-step-tutorial/

install nodejs from https://nodejs.org
Add the path to PATH system variable
create direcotory for your project
cd to the project direcotory
npm init => this create a packag.json file in the direcotory
copy the content of the followings
package.json       : Lists packages that our app will depend on and defines some useful scripts.
tsconfig.json      : Is a TypeScript compiler configuration file
typings.json       : Identifies TypeScript definition files
systemjs.config.js : The SystemJS configuration file.

npm install
create files, index.html in root folder, main.ts and app.component.js in app folder
you can start the application npm start 

deployment:

 npm install --save-dev webpack
 npm install --save-dev ts-loader

 create config file,  webpack.config.js
 
 $(npm bin)/webpack --progress
 Add import to min.ts 
 Change the index.html to point to dist/app.bundle.js
 npm install --save-dev html-webpack-plugin
 add the html-webpack-plugin into webpack.cofig.js 

 remove the app.bundle reference in index.html

 to generate files in production mode 
  $(npm bin)/webpack -p --progress


copy the dist folder content to webserver
  


 




