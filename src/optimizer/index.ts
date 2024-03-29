
import fs from 'fs-extra';
import path from 'path';
import { build } from 'esbuild';
import { normalizePath } from '../utils';
import { scanImports } from './scan';

export async function createOptimizeDepsRun(config) {
    const deps = await scanImports(config);
    const { cacheDir } = config;
    const depsCacheDir = path.resolve(cacheDir, 'deps')
    const metadataPath = path.join(depsCacheDir, '_metadata.json');
    const metadata = {
        optimized: {}
    }
    for (const id in deps) {
        const entry = deps[id]
        metadata.optimized[id] = {
            file: normalizePath(path.resolve(depsCacheDir, id + '.js')),
            src: entry
        }
        await build({
            absWorkingDir: process.cwd(),
            entryPoints: [deps[id]],
            outfile: path.resolve(depsCacheDir, id + '.js'),
            bundle: true,
            write: true,
            format: 'esm'
        })
    }
    await fs.ensureDir(depsCacheDir);
    await fs.writeFile(metadataPath, JSON.stringify(metadata, (key, value) => {
        if (key === 'file' || key === 'src') {
            return normalizePath(path.relative(depsCacheDir, value));
        }
        return value
    }, 2));
    return { metadata };
}
