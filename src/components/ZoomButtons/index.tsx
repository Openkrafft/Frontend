import React from 'react'
import { useActions } from 'kea'
import globalLogic from '../../logic'
import { ZoomInOutlined, ZoomOutOutlined } from '@ant-design/icons'

import {
	ZoomButtons as ZoomButtonContainer,
	ZoomInButton,
	ZoomOutButton
} from './ZoomBtn.styles.js'

const ZoomButtons: React.FC = () => {
	const { zoomIn, zoomOut } = useActions(globalLogic)
	return (
		<ZoomButtonContainer>
			<ZoomInButton onClick={() => zoomIn(5)}>
				<ZoomInOutlined />
			</ZoomInButton>
			<ZoomOutButton onClick={() => zoomOut(5)}>
				<ZoomOutOutlined />
			</ZoomOutButton>
		</ZoomButtonContainer>
	)
}

export default ZoomButtons
