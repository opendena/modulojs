
 
/**  
 * Module dependencies.  
 */  
 
var express = require('express');  
var http = require('http');  
var path = require('path');  
var conf = require('modulojs-conf');  

var moduloJS = function(server) { 
	return this; 
} 
 
moduloJS.conf = conf;
moduloJS.configure = conf.configure;
moduloJS.beforeRouting = conf.beforeRouting;
moduloJS.routing =  conf.routing;
moduloJS.afterRouting  = conf.afterRouting;
 

// Initialisz needed variables and routes for the app..
// As module or standalone..
moduloJS.initApp = function(server,mypath) {
        var app = express();
        app.conf = server.conf;

        app.use(express.cookieParser());
        app.use(express.session({
                secret: 'secret'
        }));
        app.use(express.urlencoded());
        app.use(express.methodOverride());

        // Loading alls routes and middlewares  
        moduloJS.configure(app,mypath);
        moduloJS.beforeRouting(app,mypath);
        moduloJS.routing(app,mypath);
        moduloJS.afterRouting(app,mypath);

        app.use(app.router);

        server.use(app);
} 
 
if (require.main === module) { 
        console.log("I'm a main app... start listening");  
  
        var app = express();  
        var mypath = mypath || __dirname;
        app.conf = moduloJS.conf; 
         
        app.set('port', process.env.PORT || 3000);  

        moduloJS.initApp(app,mypath);
 
        http.createServer(app).listen(app.get('port'), function(){  
          console.log('Express server listening on port ' + app.get('port'));  
        });  
}


//adding line so this app can be himself a module for another app
module.exports = moduloJS;
