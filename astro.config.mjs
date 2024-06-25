import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  // site: 'https://integriguard.github.io',
  // base: '/integriguardwebapp',
  site: 'https://integriguard.net',
});