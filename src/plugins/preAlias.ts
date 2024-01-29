
export function preAliasPlugin(config) {
    let server
    return {
        name: 'thunder:pre-alias',
        configureServer(_server) {
            server = _server
        },
        resolveId(id) {
            const metadata = server._optimizeDepsMetadata;
            const isOptimized = metadata.optimized[id]
            if (isOptimized) {
                return {
                    id: isOptimized.file
                };
            }
        }
    }
}
