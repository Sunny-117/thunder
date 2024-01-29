import path from 'path'
import { resolvePlugins } from './plugins';

export async function resolveConfig() {
    const root = normalizePath(process.cwd());
    const cacheDir = normalizePath(path.resolve(`node_modules/.thunder`))
    let config: any = {
        root,
        cacheDir
    };
    const plugins = await resolvePlugins(config);
    config.plugins = plugins;
    return config;
}