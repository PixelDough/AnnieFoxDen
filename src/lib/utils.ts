type DateStyle = Intl.DateTimeFormatOptions['dateStyle']

export function toDateTime(date: string) {
	return new Date(date.replaceAll('-', '/'))
}

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'en') {
	// Safari is mad about dashes in the date
	const dateToFormat = toDateTime(date);
	const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle })
	return dateFormatter.format(dateToFormat)
}
