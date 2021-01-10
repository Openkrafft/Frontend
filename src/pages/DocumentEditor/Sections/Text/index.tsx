import React, { useRef, useState } from 'react'
import ContentEditable from 'react-contenteditable'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

import {
	TextContainer,
	SectionTitle,
	EditSection,
	TextContent,
	DeleteSection
} from './Text.styles'

const Text: React.FC = () => {
	const titleRef = useRef(null)
	const listRef = useRef(null)
	const [ title, setTitle ] = useState('List')
	const [ text, setText ] = useState('')
	const [ isEditVisible, setEditVisibility ] = useState<boolean>(false)

	return (
		<TextContainer
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
			<TextContent>
				<ContentEditable
					data-placeholder='Add your text here'
					className='text-content'
					ref={listRef}
					html={text}
					onChange={(e) => setText(e.target.value)}
				/>
			</TextContent>
		</TextContainer>
	)
}

export default Text
