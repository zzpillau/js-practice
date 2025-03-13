import fs from 'fs';
import path from 'path';

class DatabaseConfigLoader {
  constructor(pathToConfigs) {
    this.pathToConfigs = pathToConfigs;
  }

  load(env) {
    const filename = `database.${env}.json`;
    const filePath = path.join(this.pathToConfigs, filename);
    const raw = fs.readFileSync(filePath);
    const rawConfig = JSON.parse(raw);

    if (!Object.hasOwn(rawConfig, 'extend')) {
      return rawConfig;
    }

    const { extend, ...config } = rawConfig;
    return { ...this.load(extend), ...config };
  }
}
