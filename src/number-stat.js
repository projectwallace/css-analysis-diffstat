module.exports = ({changed, diff}) => {
	return {
		changes: changed ? 1 : 0,
		additions: diff.absolute > 0 ? diff.absolute : 0,
		deletions: diff.absolute < 0 ? Math.abs(diff.absolute) : 0,
		changeRatio: diff.relative === 0 ? 0 : Math.abs(diff.relative),
		additionRatio: diff.absolute > 0 ? diff.relative : 0,
		deletionRatio: diff.absolute < 0 ? Math.abs(diff.relative) : 0
	}
}
