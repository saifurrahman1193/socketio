require('dotenv').config();
const express = require('express');
const http = require('http');
const app = express();
const expressServer = http.createServer(app);

const bodyParser = require("body-parser");
const cors = require("cors");
var multer = require('multer');
var forms = multer();
const {
  engine
} = require('express-handlebars');


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// =========cors==========
app.use(cors());
// =========cors==========


// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}));

// parse requests of content-type: application/json
app.use(bodyParser.json());

// for parsing multipart/form-data
app.use(forms.array());

var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
}

app.use(express.static('public', options))

require('./bootstrap/services.js')(app, expressServer);



expressServer.listen(process.env.APP_PORT, () => {
  console.log(`listening on *:${process.env.APP_PORT}`);
});