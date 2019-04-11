const test = require('ava')
const diffStat = require('../src/number-stat')

test('it calculates addition', t => {
	const fixture = {
		oldValue: 5,
		newValue: 10,
		changed: true,
		diff: {
			absolute: 5,
			relative: 1
		}
	}
	const actual = diffStat(fixture)
	const expected = {
		changes: 1,
		additions: 5,
		deletions: 0,
		changeRatio: 1,
		additionRatio: 1,
		deletionRatio: 0
	}

	t.deepEqual(actual, expected)
})

test('it calculates deletion', t => {
	const fixture = {
		oldValue: 10,
		newValue: 5,
		changed: true,
		diff: {
			absolute: -5,
			relative: -0.5
		}
	}
	const actual = diffStat(fixture)
	const expected = {
		changes: 1,
		additions: 0,
		deletions: 5,
		changeRatio: 0.5,
		additionRatio: 0,
		deletionRatio: 0.5
	}

	t.deepEqual(actual, expected)
})

test('it calculates with no change', t => {
	const fixture = {
		oldValue: 5,
		newValue: 5,
		changed: false,
		diff: {
			absolute: 0,
			relative: 0
		}
	}
	const actual = diffStat(fixture)
	const expected = {
		changes: 0,
		additions: 0,
		deletions: 0,
		changeRatio: 0,
		additionRatio: 0,
		deletionRatio: 0
	}

	t.deepEqual(actual, expected)
})
