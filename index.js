import app from './server';
import config from './config';

const run = () => {
  app.listen(config.port, () => {
    console.log(`Running on port ${config.port}`);
})};

run();