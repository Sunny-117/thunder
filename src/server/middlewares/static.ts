import serveStatic from 'serve-static'

export function serveStaticMiddleware({ root }) {
    return serveStatic(root)
}