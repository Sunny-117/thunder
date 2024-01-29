export function normalizePath(id) {
    return id.replace(/\\/g, '/')
}

const knownJsSrcRE = /\.js/

export const isJSRequest = (url) => {
    if (knownJsSrcRE.test(url)) {
        return true
    }
    return false
}