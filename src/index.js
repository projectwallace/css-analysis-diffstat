const listStat = require('./list-stat')
const numberStat = require('./number-stat')
const stringStat = require('./string-stat')

module.exports = diff => {
	const allMetrics = Object.values(diff)

	const diffStat = allMetrics
		.map(value => {
			// List diff (unique selectors, unique colors)
			if (Array.isArray(value)) {
				return listStat(value)
			}

			// Numeric diff (total rules, file size)
			if (value.diff) {
				return numberStat(value)
			}

			// Strings and complicated structures.
			return stringStat(value)
		})
		.reduce(
			(total, metric) => {
				total.changes += metric.changes
				total.additions += metric.additions
				total.deletions += metric.deletions
				total.changeRatio += metric.changeRatio
				total.additionRatio += metric.additionRatio
				total.deletionRatio += metric.deletionRatio
				return total
			},
			{
				changes: 0,
				additions: 0,
				deletions: 0,
				changeRatio: 0,
				additionRatio: 0,
				deletionRatio: 0
			}
		)

	// Prevent divisionByZeroErrors
	if (allMetrics.length === 0) {
		return diffStat
	}

	return {
		...diffStat,
		changeRatio: diffStat.changeRatio / allMetrics.length,
		additionRatio: diffStat.additionRatio / allMetrics.length,
		deletionRatio: diffStat.deletionRatio / allMetrics.length
	}
}
