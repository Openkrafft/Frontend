import React, { useRef } from 'react'
import ContentEditable from 'react-contenteditable'
import { useValues, useActions } from 'kea'
import editorLogic from '../../logic'
import Section from '../SectionWrapper'

import { TextContent } from './Text.styles'

const Text: React.FC = () => {
	const listRef = useRef(null)
	const { textSection: { textTitle, text } } = useValues(editorLogic)
	const { updateTextTitle, updateText, deleteSection } = useActions(editorLogic)

	return (
		<Section
			showSectionTitle
			sectionTitle={textTitle}
			onChange={(e) => updateTextTitle(e.target.value)}
			onDeleteClick={() => deleteSection('text')}>
			<TextContent>
				<ContentEditable
					data-placeholder='Add your text here'
					className='text-content'
					ref={listRef}
					html={text}
					onChange={(e) => updateText(e.target.value)}
				/>
			</TextContent>
		</Section>
	)
}

export default Text
