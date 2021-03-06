import { Configuration } from './config';
import { getServerInstance } from './server';
import { logger } from './util/logger';

(async () => {
  const serverInstance = await getServerInstance();

  serverInstance.listen(Configuration.PORT, () => {
    logger.info(`Server is running at http://localhost:${Configuration.PORT} in ${Configuration.ENVIRONMENT} mode`);
    logger.info(`Swagger UI is running at http://localhost:${Configuration.PORT}${Configuration.API_DOCS_PATH}`);
  });
})();
