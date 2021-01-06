const express = require('express'); // sets up the express object
const app = express();  // executes the express object which returns something... 
const path = require('path'); // path is used by app.use below 

app.use(express.static(__dirname + '/public')); 
// express.static (middleware) will default route to the index.html, see express.js documentation
// if you dont have a index.html file it will break and you will get a 404 error 


// when a html request hits localhost:5000 it serves the index.html file 
// inside of that file there's a script which runs the client.js module 
// inside of client.js there are three imports. The below code allows you to access those files 

app.use('/build', express.static(path.join(__dirname, 'node_modules/three/build'))); 

app.use('/jsm', express.static(path.join(__dirname, 'node_modules/three/examples/jsm')));


app.listen(5000, () => {
    console.log('listening on 5000')
})

