export function transformMiddleware(server) {
    return async function (req, res, next) {
        if (req.method !== 'GET') {
            return next()
        }
        let url = parse(req.url).pathname;
        if (isJSRequest(url)) {
            const result = await transformRequest(url, server)
            if (result) {
                const type = 'js'
                return send(req, res, result.code, type)
            }
        } else {
            return next();
        }
    }
}
