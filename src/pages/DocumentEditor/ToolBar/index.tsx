import React from 'react'
import { Menu, Dropdown, Tooltip } from 'antd'

import {
	AppstoreOutlined,
	SettingOutlined,
	PlusSquareOutlined,
	FormOutlined,
	PlusOutlined
} from '@ant-design/icons'

import { ToolBarContainer, ToolButton } from './ToolBar.styles.js'

const ToolBar: React.FC = () => {
	const menu = (
		<Menu>
			<Menu.Item key='1'>1st menu item</Menu.Item>
			<Menu.Item key='2'>2nd menu item</Menu.Item>
			<Menu.Item key='3'>3rd menu item</Menu.Item>
		</Menu>
	)
	return (
		<ToolBarContainer>
			<Tooltip placement='right' title={'Create Template'}>
				<ToolButton>
					<PlusSquareOutlined />
				</ToolButton>
			</Tooltip>
			<Tooltip placement='right' title={'Change Template'}>
				<ToolButton>
					<AppstoreOutlined />
				</ToolButton>
			</Tooltip>
			<Tooltip placement='right' title={'Edit Content'}>
				<ToolButton>
					<FormOutlined />
				</ToolButton>
			</Tooltip>
			<Tooltip placement='right' title={'Setting'}>
				<ToolButton>
					<SettingOutlined />
				</ToolButton>
			</Tooltip>
			<Dropdown overlay={menu} trigger={[ 'click' ]} arrow>
				<Tooltip placement='right' title={'Add Section'}>
					<ToolButton>
						<PlusOutlined />
					</ToolButton>
				</Tooltip>
			</Dropdown>
		</ToolBarContainer>
	)
}

export default ToolBar
