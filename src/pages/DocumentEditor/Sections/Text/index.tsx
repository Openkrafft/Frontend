import React, { useRef } from 'react'
import ContentEditable from 'react-contenteditable'
import { useActions } from 'kea'
import editorLogic from '../../logic'
import globalLogic from 'src/logic'
import Section from '../SectionWrapper'

import { TextContent } from './Text.styles'
import { TextSection } from '../../types'

interface TextSectionProps {
	id: string
	textSection: TextSection
}

const Text: React.FC<TextSectionProps> = ({
	id,
	textSection: { textTitle, textContent }
}) => {
	const listRef = useRef(null)
	const { toggleDrawer } = useActions(globalLogic)
	const { removeTextSection, updateTextTitle, updateTextContent } = useActions(
		editorLogic
	)

	return (
		<Section
			showSectionTitle
			sectionTitle={textTitle}
			onChange={(e) => updateTextTitle(e.target.value, id)}
			onDeleteClick={() => removeTextSection(id)}
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
