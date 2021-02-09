const express = require('express');
const path = require('path');
const msgs = require('./routes/messages');
const history = require('connect-history-api-fallback');
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Kazemo aplikaciji da za rute koje pocinju sa '/api' koristi nas ruter
app.use('/podaci', msgs);


const staticDir = express.static(path.join(__dirname , 'dist'));

app.use(staticDir);
app.use(history);
app.use(staticDir);


app.listen(1000);
