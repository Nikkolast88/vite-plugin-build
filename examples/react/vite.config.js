import path from 'path';
import { defineConfig } from 'vite';
import { buildPlugin } from 'vite-plugin-build';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    buildPlugin({
      libBuild: {
        buildOptions: {
          rollupOptions: {
            external: ['react'],
            output: { globals: { dayjs: 'React' } },
          },
          lib: {
            entry: path.resolve(__dirname, 'src/index.jsx'),
            name: 'RbacComponents',
            fileName: (format) => `rbac-components.${format}.js`,
          },
        },
      },
    }),
  ],

  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
      generateScopedName: (name) => `rbac-${name}`,
    },
  },
});