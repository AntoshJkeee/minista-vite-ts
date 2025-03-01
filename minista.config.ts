import { defineConfig } from "minista"
import path from "path"

export default defineConfig({
	root: '',
	base: '/',
	public: 'public',
	out: 'build',
	assets: {
		outDir: 'assets',
		outName: '[name]',
		images: {
			outDir: 'assets/images',
			outName: '[name]',
			remoteName: 'remote',
			optimize: {
				layout: 'constrained',
				breakpoints: [ 320, 768, 1024, 1440 ],
				resolution: [1, 2],
				format: 'inherit',
				formatOptions: {},
				quality: undefined,
				aspect: undefined,
				background: undefined,
				fit: 'cover',
				position: 'centre',
			},
		},
		svgr: {
			svgrOptions: {},
		},
		icons: {
			srcDir: 'src/assets/icons',
			outDir: 'assets/images',
			outName: '[dirname]',
			svgstoreOptions: {
				cleanSymbols: ['fill', 'stroke'],
			},
		},
		fonts: {
			outDir: 'assets/fonts',
			outName: '[name]',
		},
		bundle: {
			outName: 'main',
		},
		partial: {
			usePreact: false,
			useIntersectionObserver: true,
			outName: 'hydrate',
			rootAttrSuffix: 'partial-hydration',
			rootValuePrefix: 'ph',
			rootDOMElement: 'div',
			rootStyle: { display: 'contents' },
			intersectionObserverOptions: {
				root: null,
				rootMargin: '0px',
				thresholds: [0],
			},
		},
	},
	resolve: {
		alias: [{
			find: '@/',
			replacement: path.resolve('src') + '/',
		}],
	},
	css: {
		modules: {
			scopeBehaviour: 'local',
			globalModulePaths: [],
			generateScopedName: undefined,
			hashPrefix: '',
			localsConvention: 'camelCaseOnly',
		},
		preprocessorOptions: {
			scss: {
				additionalData: `
          @use '@/styles/helpers' as *;
        `,
				silenceDeprecations: ['legacy-js-api'],
			},
			less: {},
			stylus: {},
		},
	},
	markdown: {
		useRemarkGfm: true,
		useRehypeHighlight: true,
		remarkGfmOptions: {},
		rehypeHighlightOptions: {},
		mdxOptions: {
			remarkPlugins: [],
			rehypePlugins: [],
		},
	},
	search: {
		outDir: 'assets',
		outName: 'search',
		include: ['**/*'],
		exclude: ['/404'],
		baseUrl: '',
		trimTitle: '',
		targetSelector: '[data-search]',
		hit: {
			minLength: 3,
			number: false,
			english: true,
			hiragana: false,
			katakana: true,
			kanji: true,
		},
	},
	delivery: {
		include: ['**/*'],
		exclude: ['/404'],
		trimTitle: '',
		sortBy: 'path',
		archives: [],
	},
	beautify: {
		useHtml: true,
		useAssets: false,
		htmlOptions: {
			indent_size: 2,
			max_preserve_newlines: 0,
			indent_inner_html: true,
			extra_liners: [],
			inline: ['strong', 'b', 'small', 'del', 's', 'code', 'br', 'wbr'],
		},
		cssOptions: {
			indent_size: 2,
			space_around_combinator: true,
		},
		jsOptions: {
			indent_size: 2,
		},
	},
	vite: {
		resolve: {
			extensions: ['.js', '.ts', '.tsx', '.jsx']
		},
		build: {
			rollupOptions: {
				output: {
					chunkFileNames: `assets/[name].js`
				}
			}
		},
		css: {
			devSourcemap: true
		}
	},
})