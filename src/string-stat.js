module.exports = ({changed}) => {
	// Strings and complicated structures.
	// Always return that the value has changed, as both an
	// addition and a deletion: the old value has been
	// deleted and a new one has been added.
	const hasChanged = changed ? 1 : 0

	return {
		changes: hasChanged,
		additions: hasChanged,
		deletions: hasChanged,
		changeRatio: hasChanged,
		additionRatio: hasChanged,
		deletionRatio: hasChanged
	}
}
