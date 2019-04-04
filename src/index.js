module.exports = diff => {
	return Object.values(diff)
		.map(value => {
			// List diff (unique selectors, unique colors)
			if (Array.isArray(value)) {
				return {
					changes: value.filter(item => item.changed).length,
					additions: value.filter(item => item.added).length,
					deletions: value.filter(item => item.removed).length
				}
			}

			// Numeric diff (total rules, file size)
			if (value.diff) {
				return {
					changes: Math.abs(value.diff.absolute),
					additions: value.diff.absolute > 0 ? value.diff.absolute : 0,
					deletions: value.diff.absolute < 0 ? Math.abs(value.diff.absolute) : 0
				}
			}

			// Strings and complicated structures
			return {
				changes: value.changed ? 1 : 0,
				additions: value.changed ? 1 : 0,
				deletions: value.changed ? 1 : 0
			}
		})
		.reduce(
			(total, metric) => {
				total.changes += metric.changes
				total.additions += metric.additions
				total.deletions += metric.deletions
				return total
			},
			{
				changes: 0,
				additions: 0,
				deletions: 0
			}
		)
}
