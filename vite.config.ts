import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

/**
 * Vite plugin: resolves `figma:asset/<hash>.png` virtual imports.
 * In Figma Make these are handled by the platform's own plugin;
 * for local dev and GitHub Actions builds we return an empty string
 * so the build succeeds even if a file still contains a stray import.
 */
function figmaAssetPlugin() {
  const PREFIX = 'figma:asset/'
  return {
    name: 'figma-asset-resolver',
    resolveId(id: string) {
      if (id.startsWith(PREFIX)) return '\0' + id
    },
    load(id: string) {
      if (id.startsWith('\0' + PREFIX)) return 'export default ""'
    },
  }
}

export default defineConfig({
    base: '/Response/',
  
  plugins: [
    figmaAssetPlugin(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
