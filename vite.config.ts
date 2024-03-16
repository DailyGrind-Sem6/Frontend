import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/

export default ({ mode }: any) => {
  const env = loadEnv(mode, process.cwd(), '');

  return defineConfig({
    define: {
      'process.env': env
    },
    plugins: [react()],
    preview: {
      port: 3000
    }
  })
}

