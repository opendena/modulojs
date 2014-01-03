# Installation

`````bash
   sudo npm install modulojs -g
`````

# Usage

To create a new module/application name '''demoapp''' type :

`````bash
   modulojs demoapp
   cd demoapp
   npm install
   npm start or node server.js
`````
  
# My first module inside it...


`````bash
   cd demoapp
   npm install modulojs-demo-module
   npm start or node server.js
`````

And now, you can try to browse to '''http://localhost:3000/demo'''


# Routing

To add a route, you just need to create a file in ./middlewares/50-routing/ that exports a function which accepts an express server. Routing is like express

Example:

      module.exports = function (server) {
          server.get('/path', function (req, res) {
              // Awesome code!
          });
      };
