export function extractTextFromHTML(htmlQuery: string): string[] {
	const innerText = htmlQuery.split(/<[^>]+>/).filter((text) => !!text)
	return innerText
}

export function capitalizeFirstLetter(str: string): string {
	return str.charAt(0).toUpperCase() + str.slice(1)
}

export function extractTextFromUUID(uuid: string): string {
	return uuid.split('-')[0]
}
