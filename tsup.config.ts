import { defineConfig } from 'tsup'

export default defineConfig({
    entry: {
        index: 'src/cli.ts'
    },
    format: ['cjs', 'esm'],
    target: 'node18',
    splitting: true,
    cjsInterop: true,
    clean: true,
    dts: true,
    platform: 'node',
    sourcemap: true,
})