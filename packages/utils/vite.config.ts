import { defineConfig } from 'vite';
import path from 'path';
import dts from 'vite-plugin-dts';
export default defineConfig({
    plugins: [dts({
        entryRoot: path.resolve(__dirname, './src'), // 修改.d文件打包入口
    })],
    build: {
        outDir: "lib",
        sourcemap: true,
        rollupOptions: {
            input: ['src/index.ts'],
            output: [
                {
                    format: 'es',
                    //不用打包成.es.js,这里我们想把它打包成.js
                    entryFileNames: '[name].js',
                    //让打包目录和我们目录对应
                    preserveModules: true,
                    //配置打包根目录
                    dir: 'es',
                    preserveModulesRoot: 'src'
                },
                {
                    format: 'cjs',
                    entryFileNames: '[name].js',
                    //让打包目录和我们目录对应
                    preserveModules: true,
                    //配置打包根目录
                    dir: 'lib',
                    preserveModulesRoot: 'src'
                }
            ],
        },
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            formats: ["es", "cjs"],
            fileName: "index"
        }
    }
})