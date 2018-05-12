const express = require('express');
const expressReactViews = require('express-react-views');
const path = require('path');

const routes = require('./src/routes');

const app = express();

app.set('views', path.join(__dirname, './src/components'));
app.engine('jsx', expressReactViews.createEngine());
app.set('view engine', 'jsx');

app.use('/', routes);

app.listen(3000);
