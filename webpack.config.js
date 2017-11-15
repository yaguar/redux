var path = require('path');
var webpack = require('webpack')

module.exports = {
	entry:'./app.js',
	output:{
		filename:'bundle.js',
		path: path.resolve(__dirname,'dist')
	},
	plugins:[
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.DefinePlugin({
    		'process.env': {
      		'NODE_ENV': JSON.stringify('production')
    		}
  		})
	],
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


