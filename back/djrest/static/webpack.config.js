var path = require('path');
var webpack = require('webpack')

module.exports = {
	entry:'./index.js',
	devtool: 'source-map',
	output:{
		filename:'bundle.js',
		path: path.resolve(__dirname,'dist')
	},
	
	module:{
	rules:[{
		test:/\.js$/,
		exclude:/node_modules/,
		use:{
			loader:'babel-loader',
			options:{presets:['env','react']}
		},
	}]
	
}
}
