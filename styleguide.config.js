const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const vueLoader = require('vue-loader')
const path = require('path')

const transpileDependencies = [
	'regexpu-core',
	'strip-ansi',
	'ansi-regex',
	'ansi-styles',
	'react-dev-utils',
	'chalk',
	'unicode-match-property-ecmascript',
	'unicode-match-property-value-ecmascript',
	'acorn-jsx',
	'@znck[\\\\/]prop-types'
];

const list = [
	'Introduction.md',
	'Installation.md',
	'VueModel.md',
	'Rendering.md',
	'Lifecycle.md',
	'TemplateDeepDive.md',
	'Components.md',
	'Extending.md'
];

module.exports = {
	title: 'Vue Tech Talk PrismUI',
	jsxInExamples: true,
	assetsDir: './static',
	sections: list.map(name => {
		if (name.includes('.md')) {
			return {
				name: name.slice(0, name.length-3),
				content: `src/${name}`
			};
		} else {
			return {
				name,
				components: `src/${name}/**/[A-Z]*.vue`
			};
		}
	}),
	
	defaultExample: true,
	ribbon: {
		text: 'Confidential',
		url: `https://www.nutanix.com`
	},
	getComponentPathLine(componentPath) {
		const componentFileName = path.basename(componentPath, '.vue')
		const name =
			componentFileName.toLowerCase() === 'index'
				? path.basename(path.dirname(componentPath))
				: componentFileName
		return `import ${name} from '${componentPath.replace(/^src\//, 'src/')}'`
	},
	version: 'Part 1 (8th Dec, 2020)',
	webpackConfig: {
		watch: true,
		resolve: {
			alias: {
				'~': path.join(__dirname, './test')
			}
		},
		module: {
			rules: [
				{
					test: /\.vue$/,
					loader: 'vue-loader'
				},
				{
					test: /\.js$/,
					exclude: modulePath =>
						(/node_modules/.test(modulePath) ||
							/packages[\\/]vue-styleguidist[\\/]lib/.test(modulePath)) &&
						!transpileDependencies.some(mod =>
							new RegExp(`node_modules[\\\\/]${mod}[\\\\/]`).test(modulePath)
						),
					use: {
						loader: 'babel-loader',
						options: {
							sourceType: 'unambiguous',
							presets: [
								[
									'@babel/preset-env',
									{
										useBuiltIns: 'usage',
										corejs: 3,
										targets: {
											ie: '11'
										}
									}
								]
							],
							comments: false
						}
					}
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader']
				}
			]
		},

		plugins: [new vueLoader.VueLoaderPlugin()].concat(
			process.argv.includes('--analyze') ? [new BundleAnalyzerPlugin()] : []
		)
	},
	usageMode: 'expand',
	exampleMode: 'expand',
	compilerConfig: {
		target: { ie: 11 }
	},
	styleguideDir: 'dist',
	displayOrigins: true,
	codeSplit: false
}
