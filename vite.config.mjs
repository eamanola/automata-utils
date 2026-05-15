import { defineConfig } from 'vite';
import { nodeExternals } from 'rollup-plugin-node-externals';

export default defineConfig({
  build: {
    lib: {
      // cssFileName: 'my-lib-style',
      entry: ['src/index.js'],
      // fileName: (format, entryName) => `my-lib-${entryName}.${format}.js`,
      fileName: 'index.bundle.js',
      // 'es, cjs',
      formats: ['cjs'],
      name: 'automata-utils',
    },
    outDir: 'dist',
    target: ['es2020', 'node'],
  },
  plugins: [nodeExternals()],
});
