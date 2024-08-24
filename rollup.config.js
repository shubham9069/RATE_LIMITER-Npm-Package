

const fs  =  require('fs')
const path   = require('path')
const  pkg  = require('./package.json')
const commonjs  = require('@rollup/plugin-commonjs')


function addPackageJson() {
	const outputDir = path.resolve(__dirname, 'dist')
	const packageJson = `{
	"name": "${pkg.name}",
	"version": "${pkg.version}",
	"private": ${pkg.private},
	"author": "${pkg.author}",
	"description": "${pkg.description}",
	"homepage": "${pkg.homepage}",
	 "keywords": [
    "DSA",
    "OOPS",
    "javascript",
    "Rollup",
    "Node",
    "npm-package"
  ],
	"main": "${pkg.main}",
	"web-types": "web-types.json"

  }`
  
	!fs.existsSync(outputDir) && fs.mkdirSync(outputDir)
	fs.writeFileSync(path.resolve(outputDir, 'package.json'), packageJson)
  }

module.exports =  {
	input: 'index.js',
	output: {
		file: 'dist/index.js',
		format: 'cjs'
	},
	plugins:[
		commonjs(),
		addPackageJson(),

	]
};