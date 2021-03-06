import typescript from 'rollup-plugin-typescript';

export default {
	input: 'src/index.ts',
	output: {
		file: 'browser/bundle.js',
		format: 'umd',
		name: 'ExternalSvgPolyfill',
		sourcemap: true,
	},
	plugins: [
		typescript({
			target: 'es5',
		}),
	],
}
