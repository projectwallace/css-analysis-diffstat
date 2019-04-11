const test = require('ava')
const diffStat = require('../src/string-stat')

test('it calculates stat if there are changes', t => {
	const actual = diffStat({changed: true})

	t.is(actual.changes, 1)
	t.is(actual.additions, 1)
	t.is(actual.deletions, 1)
	t.is(actual.changeRatio, 1)
	t.is(actual.additionRatio, 1)
	t.is(actual.deletionRatio, 1)
})

test('it calculates stat if there are no changes', t => {
	const actual = diffStat({changed: false})

	t.is(actual.changes, 0)
	t.is(actual.additions, 0)
	t.is(actual.deletions, 0)
	t.is(actual.changeRatio, 0)
	t.is(actual.additionRatio, 0)
	t.is(actual.deletionRatio, 0)
})
