import { kea } from 'kea'

const globalLogic = kea({
	actions: {
		zoomIn: (zoomValue: number) => ({ zoomValue }),
		zoomOut: (zoomValue: number) => ({ zoomValue })
	},
	reducers: {
		zoom: [
			100,
			{
				zoomIn: (prevState: number, { zoomValue }: { zoomValue: number }) =>
					prevState + zoomValue,
				zoomOut: (prevState: number, { zoomValue }: { zoomValue: number }) =>
					prevState - zoomValue
			}
		]
	}
})

export default globalLogic
