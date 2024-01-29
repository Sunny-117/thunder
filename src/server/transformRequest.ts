import fs from 'fs-extra';

const { readFile } = fs;

async function transformRequest(url, server) {
    const { pluginContainer } = server
    const { id } = await pluginContainer.resolveId(url);
    const loadResult = await pluginContainer.load(id)
    let code;
    if (loadResult) {
        code = loadResult.code;;
    } else {
        code = await readFile(id, 'utf-8')
    }
    const transformResult = await pluginContainer.transform(code, id)
    return transformResult;
}
export default transformRequest;