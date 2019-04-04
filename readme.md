<div align="center">
	<h1>css-analysis-diffstat</h1>
	<p>Get a git-like diffstat from a <a href="https://github.com/bartveneman/css-analyzer-diff">css-analyzer-diff</a> and see how much your stats have changed.</p>
</div>

[![NPM Version](https://img.shields.io/npm/v/css-analysis-diffstat.svg)](https://www.npmjs.com/package/css-analysis-diffstat)
[![Weekly downloads](https://img.shields.io/npm/dw/css-analysis-diffstat.svg)](https://www.npmjs.com/package/css-analysis-diffstat)
[![Build Status](https://travis-ci.org/bartveneman/css-analysis-diffstat.svg?branch=master)](https://travis-ci.org/bartveneman/css-analysis-diffstat)
[![Known Vulnerabilities](https://snyk.io/test/github/bartveneman/css-analysis-diffstat/badge.svg)](https://snyk.io/test/github/bartveneman/css-analysis-diffstat)
![Dependencies Status](https://img.shields.io/david/bartveneman/css-analysis-diffstat.svg)
![Dependencies Status](https://img.shields.io/david/dev/bartveneman/css-analysis-diffstat.svg)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![Project: Wallace](https://img.shields.io/badge/Project-Wallace-29c87d.svg)](https://www.projectwallace.com/oss)

## Installation

```sh
npm install css-analysis-diffstat
```

## Usage

```js
const cssAnalysisDiffStat = require('css-analysis-diffstat')

// Diff calculated by https://github.com/bartveneman/css-analyzer-diff
const cssAnalyzerDiff = {
	'values.colors.unique': [
		{
			value: 'brown',
			added: false,
			changed: true,
			removed: true
		},
		{
			value: 'red',
			added: false,
			changed: false,
			removed: false
		}
	],
	'selectors.total': {
		changed: true,
		oldValue: 1,
		newValue: 2,
		diff: {relative: 1, absolute: 1}
	},
	'values.prefixed.unique': [
		{
			value: '-moz-user-select',
			changed: true,
			added: true,
			removed: false
		}
	]
}

const diffStat = cssAnalysisDiffStat(cssAnalyzerDiff)

// =>
{
	changes: 3,
	deletions: 1,
	additions: 1
}
```

## Related projects

- [CSS Analyzer](https://github.com/projectwallace/css-analyzer) Analytics for
  CSS
- [css-analyzer-diff](https://github.com/bartveneman/css-analyzer-diff)
  Calculate the difference between two sets of CSS stats
