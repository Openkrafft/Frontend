import React, { ChangeEvent, useRef } from 'react'
import ContentEditable from 'react-contenteditable'
import { useActions } from 'kea'
import globalLogic from 'src/logic'
import Section from '../SectionWrapper'
import { ListContent } from './List.styles'
import { ListSection } from 'src/pages/DocumentEditor/types'

interface ListProps {
	list: ListSection
	id: string
	updateList: (listContent: string, id: string) => void
	updateListTitle: (e: ChangeEvent<HTMLDivElement>, id: string) => void
	removeListSection: (id: string) => void
	deleteSection: (id: string) => void
}

const List: React.FC<ListProps> = ({
	id,
	list,
	updateList,
	updateListTitle,
	removeListSection,
	deleteSection
}) => {
	const listRef = useRef(null)
	const { toggleDrawer } = useActions(globalLogic)
	const { listTitle, listContent } = list

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
