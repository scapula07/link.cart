import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

const root=resolve(__dirname,'src')
const pagesDir = resolve(root, "pages");
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        cart:resolve(root, 'cart.html'),
        send:resolve(root, 'send.html'),
        auth:resolve(root, 'auth.html'),
        lending:resolve(root, 'lending.html'),
        payment:resolve(root, 'payment.html'),
        staking:resolve(root, 'staking.html'),
        deposit:resolve(root, 'deposit.html'),
        background: resolve(pagesDir, "Background", "index.js"),
        dex:resolve(root, 'dex.html'),
      },
    },
  }
})
