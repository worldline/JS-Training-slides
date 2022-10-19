import { VitePWA } from "vite-plugin-pwa"

export default {
    base: "/JS-Training-slides/",
    plugins: [
        VitePWA({
            registerType: 'autoUpdate',
            workbox: {
                globPatterns: ["**/*.{js,css,html,jpg,png}"]
            }
        })
    ]
}