import { kea } from 'kea'
import { Section } from '../pages/DocumentEditor/types'

const globalLogic = kea({
	actions: {
		zoomIn: (zoomValue: number) => ({ zoomValue }),
		zoomOut: (zoomValue: number) => ({ zoomValue }),
		toggleDrawer: ({
			isVisible,
			section,
			sectionId = ''
		}: {
			isVisible: boolean
			section: Section | 'ALL'
			sectionId: string
		}) => ({ isVisible, section, sectionId })
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
				section: 'ALL',
				sectionId: ''
			},
			{
				toggleDrawer: (
					state: {
						isVisible: boolean
						section: Section | 'ALL'
						sectionId: ''
					},
					{
						isVisible,
						section,
						sectionId
					}: { isVisible: boolean; section: Section | 'ALL'; sectionId: string }
				) => ({ isVisible, section, sectionId })
			}
		]
	}
})

export default globalLogic
