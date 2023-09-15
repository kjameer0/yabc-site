import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import EnvironmentPlugin from 'vite-plugin-environment';


// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  envDir: './env',
  plugins: [react(), tsconfigPaths(), svgrPlugin(), EnvironmentPlugin('all')],
});
