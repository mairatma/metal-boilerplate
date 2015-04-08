var isparta = require('isparta');

module.exports = function (config) {
	config.set({
		frameworks: ['jspm', 'mocha', 'chai'],

		jspm: {
			loadFiles: ['src/**/*.js', 'test/**/*.js']
		},

		files: [
			'node_modules/metaljs/node_modules/closure-templates/soyutils.js'
		],

		preprocessors: {
			'src/**/!(*.soy).js': ['coverage'],
			'jspm_packages/?*/**/*.js': ['babel']
		},

		browsers: ['Chrome'],

		reporters: ['coverage', 'progress'],

		coverageReporter: {
			instrumenters: { isparta: isparta },
			instrumenter: { '**/*.js': 'isparta' },
			reporters: [
				{type: 'html'},
				{type: 'text-summary'},
				{type: 'lcov', subdir: 'lcov'}
			]
		}
	});
};
