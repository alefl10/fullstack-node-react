import config from './src/config/config';
import app from './src/server';

app.listen(config.port, config.host, () => {
  console.log(`Listening on http://localhost:${config.port}`);
});
