import React, { useRef, useState } from 'react'
import ContentEditable from 'react-contenteditable'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

import {
	ListContainer,
	SectionTitle,
	EditSection,
	ListContent,
	DeleteSection
} from './List.styles'

const List: React.FC = () => {
	const titleRef = useRef(null)
	const listRef = useRef(null)
	const [ title, setTitle ] = useState('List')
	const [ list, setList ] = useState('<li></li>')
	const [ isEditVisible, setEditVisibility ] = useState<boolean>(false)

	return (
		<ListContainer
			onMouseOver={() => setEditVisibility(true)}
			onMouseLeave={() => setEditVisibility(false)}>
			<EditSection style={{ display: isEditVisible ? 'block' : 'none' }}>
				<EditOutlined />
			</EditSection>
			<DeleteSection style={{ display: isEditVisible ? 'block' : 'none' }}>
				<DeleteOutlined />
			</DeleteSection>
			<SectionTitle>
				<ContentEditable
					data-placeholder='Section title'
					className='section-title'
					ref={titleRef}
					html={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</SectionTitle>
			<ListContent>
				<ContentEditable
					className='list-content'
					ref={listRef}
					html={list}
					onChange={(e) => setList(e.target.value)}
				/>
			</ListContent>
		</ListContainer>
	)
}

export default List
