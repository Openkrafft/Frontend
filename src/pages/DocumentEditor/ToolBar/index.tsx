import React, { useState } from 'react'
import { Tooltip } from 'antd';

import {
    AppstoreOutlined,
    SettingOutlined,
    PlusSquareOutlined,
    FormOutlined,
} from '@ant-design/icons';

import { ToolBarContainer, ToolButton } from './ToolBar.styles.js'

const ToolBar: React.FC = () => {
    return (
        <ToolBarContainer>
            <Tooltip placement="right" title={'Create Template'}>
                <ToolButton>
                    <PlusSquareOutlined />
                </ToolButton>
            </Tooltip>
            <Tooltip placement="right" title={'Change Template'}>
                <ToolButton>
                    <AppstoreOutlined />
                </ToolButton>
            </Tooltip>
            <Tooltip placement="right" title={'Edit Content'}>
                <ToolButton>
                    <FormOutlined />
                </ToolButton>
            </Tooltip>
            <Tooltip placement="right" title={'Setting'}>
                <ToolButton>
                    <SettingOutlined />
                </ToolButton>
            </Tooltip>
        </ToolBarContainer>
    )
}

export default ToolBar