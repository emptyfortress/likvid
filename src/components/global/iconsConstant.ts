interface defaults {
	color: string
	varPrefix: string
	hoverColor: string
	size: string
}

const sizes = {
	sm: {
		size: 16,
		strokeWidth: 1,
	},
	md: {
		size: 24,
		strokeWidth: 1,
	},
	lg: {
		size: 32,
		strokeWidth: 2,
	},
	xl: {
		size: 48,
		strokeWidth: 2.5,
	},
}

const defaults: defaults = {
	color: 'var:primary',
	varPrefix: 'q-',
	hoverColor: 'red',
	size: 'lg',
}

export { sizes, defaults }
