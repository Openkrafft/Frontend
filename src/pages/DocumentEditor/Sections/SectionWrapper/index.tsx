import React, { useRef, useState } from 'react'
import ContentEditable from 'react-contenteditable'
import {
	EditOutlined,
	DeleteOutlined,
	PlusOutlined,
	DragOutlined
} from '@ant-design/icons'

import {
	SectionContainer,
	SectionTitle,
	SectionButtons,
	EditSection,
	DeleteSection,
	AddSection,
	DragSection,
	SectionChildElements
} from './Section.styles'

interface SectionProps {
	children: React.ReactNode
	showSectionTitle?: boolean
	sectionTitle?: string
	showAddButton?: boolean
	showEditButton?: boolean
	showRemoveButton?: boolean
	showDragButton?: boolean
	onDragProps: any
	onAddClick?: (e: React.MouseEvent) => void
	onEditClick?: (e: React.MouseEvent) => void
	onDeleteClick?: (e: React.MouseEvent) => void
	onChange?: (e: any) => void
}

const Section: React.FC<SectionProps> = ({
	children,
	showAddButton = false,
	showEditButton = true,
	showRemoveButton = true,
	showSectionTitle = true,
	showDragButton = true,
	sectionTitle = '',
	onDragProps,
	onAddClick,
	onEditClick,
	onDeleteClick,
	onChange
}) => {
	const titleRef = useRef(null)
	const [ isEditVisible, setEditVisibility ] = useState<boolean>(false)

	return (
		<SectionContainer
			onMouseOver={() => setEditVisibility(true)}
			onMouseLeave={() => setEditVisibility(false)}>
			<SectionButtons style={{ display: isEditVisible ? 'block' : 'none' }}>
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
				{showDragButton && (
					<DragSection {...onDragProps}>
						<DragOutlined />
					</DragSection>
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
