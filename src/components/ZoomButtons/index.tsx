import React from 'react'
import {
    ZoomInOutlined,
    ZoomOutOutlined
} from '@ant-design/icons';

import { ZoomButtons as ZoomButtonContainer, ZoomInButton, ZoomOutButton } from './ZoomBtn.styles.js'

const ZoomButtons: React.FC = () => {
    return (
        <ZoomButtonContainer>
            <ZoomInButton>
                <ZoomInOutlined />
            </ZoomInButton>
            <ZoomOutButton>
                <ZoomOutOutlined />
            </ZoomOutButton>
        </ZoomButtonContainer>
    )
}

export default ZoomButtons