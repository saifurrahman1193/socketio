require('dotenv').config();
const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const bodyParser = require("body-parser");
const cors = require("cors");
var multer = require('multer');
var forms = multer();
var path = require('path');
const {engine} = require('express-handlebars');



app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// =========cors==========
app.use(cors());
// =========cors==========


// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

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



require("./routes/routes.js")(app);
require("./app/jobs/jobs.js")(app);

// Handling Errors
app.use( async(err, req, res, next) => {
  // console.log(err);
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  await loghelper.log(error?.message, 'error')

  res.status(err.statusCode).json({
    message: err.message,
  });
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

server.listen(process.env.APP_PORT, () => {
  console.log(`listening on *:${process.env.APP_PORT}`);
});

