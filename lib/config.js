const path = require('path')
const { normalizePath } = require('./utils');
const { resolvePlugins } = require('./plugins');
async function resolveConfig() {
    const root = normalizePath(process.cwd());
    const cacheDir = normalizePath(path.resolve(`node_modules/.thunder`))
    let config = {
        root,
        cacheDir
    };
    const plugins = await resolvePlugins(config);
    config.plugins = plugins;
    return config;
}
module.exports = resolveConfig;