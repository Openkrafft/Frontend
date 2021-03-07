import React, { useRef, ChangeEvent } from 'react'
import ContentEditable from 'react-contenteditable'
import globalLogic from 'src/logic'
import Section from '../SectionWrapper'

import { TextContent } from './Text.styles'
import { TextSection } from '../../../pages/DocumentEditor/types'

interface TextSectionProps {
	id: string
	textSection: TextSection
	toggleDrawer: (
		{ isVisible, section }: { isVisible: boolean; section: string }
	) => void
	removeTextSection: (id: string) => void
	updateTextTitle: (e: ChangeEvent<HTMLDivElement>, id: string) => void
	updateTextContent: (skillsList: string, id: string) => void
	deleteSection: (id: string) => void
}

const Text: React.FC<TextSectionProps> = ({
	id,
	textSection: { textTitle, textContent },
	toggleDrawer,
	removeTextSection,
	updateTextTitle,
	updateTextContent,
	deleteSection
}) => {
	const listRef = useRef(null)

	return (
		<Section
			showSectionTitle
			currentSectionId={id}
			sectionTitle={textTitle}
			onChange={(e) => updateTextTitle(e.target.value, id)}
			onDeleteClick={() => {
				deleteSection(id)
				removeTextSection(id)
			}}
			onEditClick={() => toggleDrawer({ isVisible: true, section: id })}>
			<TextContent>
				<ContentEditable
					data-placeholder='Add text here'
					className='text-content'
					ref={listRef}
					html={textContent}
					onChange={(e) => updateTextContent(e.target.value, id)}
				/>
			</TextContent>
		</Section>
	)
}

export default Text
