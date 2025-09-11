import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  build: {
    outDir: 'build',
    emptyOutDir: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/__tests__/setupTest.tsx',
    coverage: {
      include: [
        'src/components/**/*', 
        'src/common/**/*', 
        'src/context/**/*', 
        'src/hooks/**/*',
        'src/pages/**/*'
      ],
      all: true,
      thresholds: {
        statements: 80,
        branches: 75,
        functions: 75,
        lines: 80,
      },
    },
  },
});