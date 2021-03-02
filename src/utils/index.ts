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

export function swapArrayItems(arr: any[], index1: number, index2: number) {
	;[ arr[index1], arr[index2] ] = [ arr[index2], arr[index1] ]
	return arr
}
