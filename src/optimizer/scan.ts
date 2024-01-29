import { build } from 'esbuild';
import { esbuildScanPlugin } from './esbuildScanPlugin';
import path from 'path';

export async function scanImports(config: any) {
    const depImports = {};
    const esPlugin = await esbuildScanPlugin(config, depImports);
    const entry = path.resolve('./index.html')
    // TODO: error: No loader is configured for ".html" files: index.html
    try {
        await build({
            absWorkingDir: config.root,
            // entryPoints: [entry],
            bundle: true,
            format: 'esm',
            outfile: 'dist/index.js',
            write: true,
            plugins: [esPlugin]
        })
    } catch (error) {
        console.log(error)
    }
    return depImports;
}
