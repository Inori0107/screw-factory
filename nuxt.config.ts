// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },

	app: {
		head: {
			title: "專業螺絲製造工廠",
			meta: [
				{ charset: "utf-8" },
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{ key: "description", name: "description", content: "專業螺絲製造與定製服務，提供高品質螺絲產品" }
			],
			link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
		}
	},
	css: ["~/assets/css/main.css"],
	modules: ["@nuxt/fonts", "@nuxt/icon", "@nuxt/ui", "@nuxt/content", "@nuxt/eslint", "@nuxt/image"],
	// 啟用 SSR 以提高 SEO 效果
	ssr: true,

	// 配置生成靜態網站
	nitro: {
		preset: "netlify",
		output: {
			dir: "dist",
			publicDir: "dist"
		}
	}
});
