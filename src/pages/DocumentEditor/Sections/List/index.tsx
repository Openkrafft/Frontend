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
	dragSectionProps: any
}

const List: React.FC<ListProps> = ({
	id,
	list: { listTitle, listContent },
	dragSectionProps
}) => {
	const listRef = useRef(null)
	const {
		updateList,
		updateListTitle,
		removeListSection,
		removeListContent
	} = useActions(editorLogic)
	const { toggleDrawer } = useActions(globalLogic)

	return (
		<Section
			showSectionTitle
			sectionTitle={listTitle}
			onDragProps={dragSectionProps}
			onChange={(e) => updateListTitle(e.target.value, id)}
			onDeleteClick={() => {
				removeListSection(id)
				removeListContent(id)
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
