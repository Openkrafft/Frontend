import React, { useRef } from 'react'
import ContentEditable from 'react-contenteditable'
import { useValues, useActions } from 'kea'
import editorLogic from '../../logic'
import Section from '../SectionWrapper'

import { ListContent } from './List.styles'

const List: React.FC = () => {
	const listRef = useRef(null)
	const { updateList, updateListTitle } = useActions(editorLogic)
	const { list: { listTitle, list } } = useValues(editorLogic)

	return (
		<Section
			showSectionTitle
			sectionTitle={listTitle}
			onChange={(e) => updateListTitle(e.target.value)}>
			<ListContent>
				<ContentEditable
					className='list-content'
					ref={listRef}
					html={list}
					onChange={(e) => updateList(e.target.value)}
				/>
			</ListContent>
		</Section>
	)
}

export default List
