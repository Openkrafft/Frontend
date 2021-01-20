import { kea } from 'kea'
import { Section } from '../pages/DocumentEditor/types'

const globalLogic = kea({
	actions: {
		zoomIn: (zoomValue: number) => ({ zoomValue }),
		zoomOut: (zoomValue: number) => ({ zoomValue }),
		toggleDrawer: ({
			isVisible,
			section
		}: {
			isVisible: boolean
			section: Section | 'ALL'
		}) => ({ isVisible, section })
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
		],
		drawer: [
			{
				isVisible: false,
				section: 'ALL'
			},
			{
				toggleDrawer: (
					state: {
						isVisible: boolean
						section: Section | 'ALL'
					},
					{ isVisible, section }: { isVisible: boolean; section: Section | 'ALL' }
				) => ({ isVisible, section })
			}
		]
	}
})

export default globalLogic
