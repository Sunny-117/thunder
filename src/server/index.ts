import connect from 'connect'
import { createPluginContainer } from './pluginContainer';
import { transformMiddleware } from './middlewares/transform';
import { serveStaticMiddleware } from './middlewares/static';
import { resolveConfig } from '../config';

export async function createServer() {
    const config = await resolveConfig();
    const middlewares = connect();
    const pluginContainer = await createPluginContainer(config)
    const server = {
        pluginContainer,
        async listen(port) {
            await runOptimize(config, server);
            require('http').createServer(middlewares)
                .listen(port, async () => {
                    console.log(`dev server running at: http://localhost:${port}`)
                })
        }
    }
    for (const plugin of config.plugins) {
        if (plugin.configureServer) {
            await plugin.configureServer(server)
        }
    }
    middlewares.use(transformMiddleware(server))
    middlewares.use(serveStaticMiddleware(config))
    return server;
}

export async function runOptimize(config, server) {
    const optimizeDeps = await createOptimizeDepsRun(config)
    server._optimizeDepsMetadata = optimizeDeps.metadata
}
