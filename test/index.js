const test = require('ava')
const diffStat = require('..')

test('it responds with the correct structure', t => {
	const actual = diffStat({})
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

test('it handles multiple types of stats correctly', t => {
	const fixture = {
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
	const expected = {
		changes: 5,
		additions: 4,
		deletions: 4,
		changeRatio: (1 + 0.5 + 1 + 1 + 0.5) / 5,
		additionRatio: (1 + 0 + 0 + 1 + 0.5) / 5,
		deletionRatio: (0 + 0.5 + 1 + 1 + 0) / 5
	}

	const actual = diffStat(fixture)

	t.deepEqual(actual, expected)
})

test('it handles no changes correctly', t => {
	const fixture = {
		'colors.total': {
			oldValue: 1,
			newValue: 1,
			changed: false,
			diff: {absolute: 0, relative: 0}
		},
		'colors.unique': [
			{
				value: 'red',
				changed: false,
				added: false,
				removed: false
			},
			{
				value: 'blue',
				changed: false,
				added: false,
				removed: false
			}
		],
		'selectors.identifiers.max.value': {
			changed: false,
			oldValue: 'a',
			newValue: 'a'
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
