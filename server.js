import express from 'express';
import logger from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

const app = express();

app.set('trust proxy', true);
app.use('/', express.static(__dirname + '/public'));
app.use(logger('dev'));
app.use(helmet());
app.use(cors());

app.get('/healthcheck', (req, res) => {
  res.sendStatus(200);
});

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    message: error.message,
    error,
  });
});

export default app;
