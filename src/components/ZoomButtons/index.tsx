import React from 'react'
import { Tooltip } from 'antd';
import {
    ZoomInOutlined,
    ZoomOutOutlined
} from '@ant-design/icons';

import { ZoomButtons as ZoomButtonContainer, ZoomInButton, ZoomOutButton } from './ZoomBtn.styles.js'

const ZoomButtons: React.FC = () => {
    return (
        <ZoomButtonContainer>
            <Tooltip placement="left" title={'Zoom In'}>
                <ZoomInButton>
                    <ZoomInOutlined />
                </ZoomInButton>
            </Tooltip>
            <Tooltip placement="left" title={'Zoom Out'}>
                <ZoomOutButton>
                    <ZoomOutOutlined />
                </ZoomOutButton>
            </Tooltip>
        </ZoomButtonContainer>
    )
}

export default ZoomButtons