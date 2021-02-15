import React from 'react'
import { useValues, useActions } from 'kea'
import editorLogic from '../logic'
import globalLogic from '../../../logic'
import { Menu, Dropdown, Tooltip } from 'antd'
import { v4 as uuidv4 } from 'uuid'

import {
	AppstoreOutlined,
	SettingOutlined,
	PlusSquareOutlined,
	FormOutlined,
	PlusOutlined
} from '@ant-design/icons'

import { ToolBarContainer, ToolButton } from './ToolBar.styles.js'

const ToolBar: React.FC = () => {
	const {
		addSection,
		addSkillsSection,
		addListSection,
		addTextSection
	} = useActions(editorLogic)
	const { toggleDrawer } = useActions(globalLogic)
	const { sections: currentSections } = useValues(editorLogic)
	const documentSections: any = {
		contactInfo: 'Add Contact Info',
		experience: 'Add Experience',
		education: 'Add Education',
		projects: 'Add Projects'
	}
	const sectionsToDisplay = Object.keys(documentSections).filter(
		(section: string) => !currentSections.includes(section)
	)

	const menu = (
		<Menu>
			<Menu.Item
				onClick={() => {
					const id = uuidv4()
					addSection(`list-${id}`)
					addListSection(`list-${id}`)
				}}
				key={1}>
				Add List Section
			</Menu.Item>
			<Menu.Item
				onClick={() => {
					const id = uuidv4()
					addSection(`text-${id}`)
					addTextSection(`text-${id}`)
				}}
				key={2}>
				Add Text Section
			</Menu.Item>
			<Menu.Item
				onClick={() => {
					const id = uuidv4()
					addSection(`skills-${id}`)
					addSkillsSection(`skills-${id}`)
				}}
				key={3}>
				Add Skills Section
			</Menu.Item>
			{sectionsToDisplay.map((section: string) => (
				<Menu.Item onClick={() => addSection(section)} key={uuidv4()}>
					{documentSections[section]}
				</Menu.Item>
			))}
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
				<ToolButton
					onClick={() => toggleDrawer({ isVisible: true, section: 'ALL' })}>
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
