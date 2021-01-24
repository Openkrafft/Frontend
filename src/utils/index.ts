export function extractTextFromHTML(htmlQuery: string): string[] {
	const innerText = htmlQuery.split(/<[^>]+>/).filter((text) => !!text)
	return innerText
}
