module.exports = values => {
	const valuesCount = values.length
	const changedItemsCount = values.filter(item => item.changed).length
	const additionsCount = values.filter(item => item.added).length
	const deletionsCount = values.filter(item => item.removed).length

	return {
		changes: changedItemsCount,
		additions: additionsCount,
		deletions: deletionsCount,
		changeRatio: valuesCount === 0 ? 0 : changedItemsCount / valuesCount,
		additionRatio: additionsCount === 0 ? 0 : additionsCount / valuesCount,
		deletionRatio: deletionsCount === 0 ? 0 : deletionsCount / valuesCount
	}
}
