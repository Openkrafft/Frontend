import React, { useRef, useState } from 'react'
import { useValues, useActions } from 'kea'
import editorLogic from '../../logic'
import ContentEditable from 'react-contenteditable'
import {
	EditOutlined,
	DeleteOutlined,
	PlusOutlined,
	ArrowUpOutlined,
	ArrowDownOutlined
} from '@ant-design/icons'

import {
	SectionContainer,
	SectionTitle,
	SectionButtons,
	EditSection,
	DeleteSection,
	AddSection,
	SectionChildElements,
	MoveUpSection,
	MoveDownSection
} from './Section.styles'

interface SectionProps {
	children: React.ReactNode
	showSectionTitle?: boolean
	currentSectionId?: string
	sectionTitle?: string
	showAddButton?: boolean
	showEditButton?: boolean
	showRemoveButton?: boolean
	onAddClick?: (e: React.MouseEvent) => void
	onEditClick?: (e: React.MouseEvent) => void
	onDeleteClick?: (e: React.MouseEvent) => void
	onChange?: (e: any) => void
}

const Section: React.FC<SectionProps> = ({
	children,
	currentSectionId,
	showAddButton = false,
	showEditButton = true,
	showRemoveButton = true,
	showSectionTitle = true,
	sectionTitle = '',
	onAddClick,
	onEditClick,
	onDeleteClick,
	onChange
}) => {
	const titleRef = useRef(null)
	const [ isEditVisible, setEditVisibility ] = useState<boolean>(false)
	const { sections } = useValues(editorLogic)
	const { moveSectionUp, moveSectionDown } = useActions(editorLogic)

	return (
		<SectionContainer
			onMouseOver={() => setEditVisibility(true)}
			onMouseLeave={() => setEditVisibility(false)}>
			<SectionButtons style={{ display: isEditVisible ? 'block' : 'none' }}>
				{sections.length === 1 || sections[0] === currentSectionId ? null : (
					<MoveUpSection onClick={() => moveSectionUp(currentSectionId)}>
						<ArrowUpOutlined />
					</MoveUpSection>
				)}
				{sections.length === 1 ||
				sections[sections.length - 1] === currentSectionId ? null : (
					<MoveDownSection onClick={() => moveSectionDown(currentSectionId)}>
						<ArrowDownOutlined />
					</MoveDownSection>
				)}
				{showAddButton && (
					<AddSection onClick={onAddClick}>
						<PlusOutlined />
					</AddSection>
				)}
				{showEditButton && (
					<EditSection onClick={onEditClick}>
						<EditOutlined />
					</EditSection>
				)}
				{showRemoveButton && (
					<DeleteSection onClick={onDeleteClick}>
						<DeleteOutlined />
					</DeleteSection>
				)}
			</SectionButtons>

			{showSectionTitle && (
				<SectionTitle>
					<ContentEditable
						data-placeholder='Section title'
						className='section-title'
						ref={titleRef}
						html={sectionTitle}
						onChange={onChange!}
					/>
				</SectionTitle>
			)}
			<SectionChildElements>{children}</SectionChildElements>
		</SectionContainer>
	)
}

export default Section
