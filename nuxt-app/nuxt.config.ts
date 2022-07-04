import { defineNuxtConfig } from 'nuxt'
import path from 'path';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    vite: {
        base: '/',
        resolve: {
            alias: {
                '~': path.resolve(__dirname, './nuxt-app')
            },
        },
        server: {
            hmr: {
                protocol: 'ws',
                host: 'localhost'
            },
            // hmr: false
        }
    },
})
