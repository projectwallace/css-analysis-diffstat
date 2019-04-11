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
  'colors.total': {
    oldValue: 2,
    newValue: 4,
    changed: true,
    diff: {absolute: 2, relative: 1}
  },
  'rules.total': {
    oldValue: 4,
    newValue: 2,
    changed: true,
    diff: {absolute: -2, relative: -0.5}
  },
  'declarations.importants.total': {
    oldValue: 1,
    newValue: 0,
    changed: true,
    diff: {absolute: -1, relative: -1}
  },
  'selectors.identifiers.max.value': {
    oldValue: 'oldValue',
    newValue: 'newValue',
    changed: true
  },
  'colors.unique': [
    {
      value: 'red',
      added: true,
      changed: true,
      removed: false
    },
    {
      value: 'blue',
      added: false,
      changed: false,
      removed: false
    }
  ]
}

const diffStat = cssAnalysisDiffStat(cssAnalyzerDiff)

// =>
{
  changes: 5,
  additions: 4,
  deletions: 4,
  changeRatio: 0.8,
  additionRatio: 0.5,
  deletionRatio: 0.5
}
```

## Related projects

- [CSS Analyzer](https://github.com/projectwallace/css-analyzer) Analytics for
  CSS
- [css-analyzer-diff](https://github.com/bartveneman/css-analyzer-diff)
  Calculate the difference between two sets of CSS stats
