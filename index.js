import config from './src/config/config';
import logger from './src/util/logger';
import app from './src/server';

app.listen(config.port);
logger.log(`Listening on http://localhost: ${config.port}`);
