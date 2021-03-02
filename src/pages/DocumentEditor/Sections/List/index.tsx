import React, { useRef } from 'react'
import ContentEditable from 'react-contenteditable'
import { useActions } from 'kea'
import editorLogic from '../../logic'
import globalLogic from 'src/logic'
import Section from '../SectionWrapper'
import { ListSection } from '../../types'
import { ListContent } from './List.styles'

interface ListProps {
	list: ListSection
	id: string
}

const List: React.FC<ListProps> = ({
	id,
	list: { listTitle, listContent }
}) => {
	const listRef = useRef(null)
	const {
		updateList,
		updateListTitle,
		removeListSection,
		deleteSection
	} = useActions(editorLogic)
	const { toggleDrawer } = useActions(globalLogic)

	return (
		<Section
			showSectionTitle
			sectionTitle={listTitle}
			currentSectionId={id}
			onChange={(e) => updateListTitle(e.target.value, id)}
			onDeleteClick={() => {
				deleteSection(id)
				removeListSection(id)
			}}
			onEditClick={() => toggleDrawer({ isVisible: true, section: id })}>
			<ListContent>
				<ContentEditable
					className='list-content'
					ref={listRef}
					html={listContent}
					onChange={(e) => updateList(e.target.value, id)}
				/>
			</ListContent>
		</Section>
	)
}

export default List
