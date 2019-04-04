const test = require('ava')
const diffStat = require('..')

test('it responds with the correct structure', t => {
	const actual = diffStat({})
	const expected = {
		changes: 0,
		additions: 0,
		deletions: 0
	}

	t.deepEqual(actual, expected)
})

test('it counts the correct amount of changes for lists', t => {
	const provider = [
		[
			{
				'values.colors.unique': [
					{
						added: true,
						changed: true,
						removed: false
					},
					{
						added: false,
						changed: false,
						removed: false
					}
				]
			},
			{
				changes: 1,
				additions: 1,
				deletions: 0
			}
		],
		[
			{
				'values.colors.unique': []
			},
			{
				changes: 0,
				additions: 0,
				deletions: 0
			}
		],
		[
			{
				'values.colors.unique': [
					{
						added: false,
						changed: true,
						removed: true
					}
				]
			},
			{
				changes: 1,
				additions: 0,
				deletions: 1
			}
		]
	]

	provider.forEach(([fixture, expected]) => {
		t.deepEqual(diffStat(fixture), expected)
	})
})

test('it counts the correct amount of changes for numbers', t => {
	const provider = [
		[
			{
				'values.colors.total': {
					diff: {absolute: 1}
				}
			},
			{
				changes: 1,
				additions: 1,
				deletions: 0
			}
		],
		[
			{
				'values.colors.total': {
					diff: {absolute: 0}
				}
			},
			{
				changes: 0,
				additions: 0,
				deletions: 0
			}
		],
		[
			{
				'values.colors.total': {
					diff: {absolute: -1}
				}
			},
			{
				changes: 1,
				additions: 0,
				deletions: 1
			}
		]
	]

	provider.forEach(([fixture, expected]) => {
		t.deepEqual(diffStat(fixture), expected)
	})
})

test('it counts the correct amount of additions for strings', t => {
	const provider = [
		[{'selectors.identifiers.max.value': {changed: true}}, 1],
		[{'selectors.identifiers.max.value': {changed: false}}, 0]
	]

	provider.forEach(([fixture, expected]) => {
		t.is(diffStat(fixture).additions, expected)
	})
})

test('it handles multiple types of stats correctly', t => {
	const provider = [
		[
			{
				'colors.total': {diff: {absolute: 2}},
				'rules.total': {diff: {absolute: -1}},
				'selectors.identifiers.max.value': {changed: true},
				'colors.unique': [
					{
						added: true,
						changed: true,
						removed: false
					},
					{
						added: false,
						changed: false,
						removed: false
					}
				]
			},
			{
				changes: 5,
				additions: 4,
				deletions: 2
			}
		]
	]

	provider.forEach(([fixture, expected]) => {
		t.deepEqual(diffStat(fixture), expected)
	})
})
