import express from 'express';
import expressReactViews from 'express-react-views';
import path from 'path';

import routes from './src/routes';

const app = express();

app.set('views', path.join(__dirname, './src/components'));
app.engine('jsx', expressReactViews.createEngine());
app.set('view engine', 'jsx');

app.use(express.static(path.join(__dirname, './src/assets')))
app.use('/', routes);

app.listen(3003);
