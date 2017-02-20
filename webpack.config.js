var webpack = require('webpack') ;
var htmlwebpack = require('html-webpack-plugin') ;

module.exports = {
   entry: './app/main.ts' , 
   output: {
       path: './dist'  , 
       filename: 'app.bundle.js'
   } , 
   module:{
       loaders: [
           {test: /\.ts$/, loader:'ts-loader'}
       ]
   },
   resolve:{
       extensions:[ '.js', '.ts']
   } ,
   plugins:[
       new htmlwebpack({
           template: './index.html'
       })
   ]  

} ;