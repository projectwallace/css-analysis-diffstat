const test = require('ava')
const diffStat = require('../src/list-stat')

test('it counts changes', t => {
	const fixture = [{changed: true}, {changed: false}]
	const actual = diffStat(fixture)
	const expected = 1

	t.is(actual.changes, expected)
})

test('it counts changes correctly when there are none', t => {
	t.is(diffStat([]).changes, 0)
})

test('it counts additions', t => {
	const fixture = [{added: true}, {added: false}]
	const actual = diffStat(fixture)
	const expected = 1

	t.is(actual.additions, expected)
})

test('it counts additions correctly when there are none', t => {
	const fixture = [{added: false}]
	const actual = diffStat(fixture)
	const expected = 0

	t.is(actual.additions, expected)
	t.is(diffStat([]).additions, 0)
})

test('it counts deletions', t => {
	const fixture = [{removed: true}, {removed: false}]
	const actual = diffStat(fixture)
	const expected = 1

	t.is(actual.deletions, expected)
})

test('it counts deletions correctly when there are none', t => {
	const fixture = [{removed: false}]
	const actual = diffStat(fixture)
	const expected = 0

	t.is(actual.deletions, expected)
	t.is(diffStat([]).deletions, 0)
})

test('it calculates changed ratio', t => {
	const fixture = [
		{changed: false},
		{changed: false},
		{changed: true},
		{changed: true}
	]
	const actual = diffStat(fixture)
	const expected = 0.5

	t.is(actual.changeRatio, expected)
})

test('it calculates changed ratio without changes present', t => {
	const fixture = [{changed: false}, {changed: false}]
	const actual = diffStat(fixture)
	const expected = 0

	t.is(actual.changeRatio, expected)
})

test('it calculates addition ratio', t => {
	const fixture = [{added: false}, {added: false}, {added: true}, {added: true}]
	const actual = diffStat(fixture)
	const expected = 0.5

	t.is(actual.additionRatio, expected)
})

test('it calculates addition ratio without changes present', t => {
	const fixture = [{added: false}, {added: false}]
	const actual = diffStat(fixture)
	const expected = 0

	t.is(actual.additionRatio, expected)
})

test('it calculates deletion ratio', t => {
	const fixture = [
		{removed: false},
		{removed: false},
		{removed: true},
		{removed: true}
	]
	const actual = diffStat(fixture)
	const expected = 0.5

	t.is(actual.deletionRatio, expected)
})

test('it calculates deletion ratio without changes present', t => {
	const fixture = [{removed: false}, {removed: false}]
	const actual = diffStat(fixture)
	const expected = 0

	t.is(actual.deletionRatio, expected)
})
