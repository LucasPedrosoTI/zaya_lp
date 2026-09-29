import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const imageExt = /\.(jpe?g|png|webp)$/i;

function syncDocsAssets() {
  const docsDir = path.resolve('docs');
  const publicDir = path.resolve('public');
  const clinicDir = path.join(publicDir, 'clinic');

  fs.mkdirSync(publicDir, { recursive: true });
  fs.mkdirSync(clinicDir, { recursive: true });

  const logoSrc = path.join(docsDir, 'logo.jpg');
  const logoDest = path.join(publicDir, 'logo.jpg');
  if (fs.existsSync(logoSrc)) {
    fs.copyFileSync(logoSrc, logoDest);
  }

  for (const file of fs.readdirSync(clinicDir)) {
    fs.unlinkSync(path.join(clinicDir, file));
  }

  if (!fs.existsSync(docsDir)) return;

  for (const file of fs.readdirSync(docsDir)) {
    if (!imageExt.test(file) || file.toLowerCase() === 'logo.jpg') continue;
    fs.copyFileSync(path.join(docsDir, file), path.join(clinicDir, file));
  }
}

function docsAssetsPlugin() {
  syncDocsAssets();

  return {
    name: 'sync-docs-assets',
    buildStart() {
      syncDocsAssets();
    },
    configureServer(server) {
      syncDocsAssets();
      const docsDir = path.resolve('docs');
      server.watcher.add(docsDir);
      const refresh = (file) => {
        if (!file.startsWith(docsDir)) return;
        syncDocsAssets();
        server.ws.send({ type: 'full-reload' });
      };
      server.watcher.on('add', refresh);
      server.watcher.on('change', refresh);
      server.watcher.on('unlink', refresh);
    },
  };
}

export default defineConfig({
  vite: {
    plugins: [tailwindcss(), docsAssetsPlugin()],
  },
});
