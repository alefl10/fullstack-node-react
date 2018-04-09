import config from './src/config/config';
import logger from './src/util/logger';
import app from './src/server';

app.listen(config.port, config.host, () => {
  logger.log(`Listening on http://localhost:${config.port}`);
});
