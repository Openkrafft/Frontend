import React, { useState, useRef } from 'react'
import ContentEditable from 'react-contenteditable'

import { EditOutlined } from '@ant-design/icons'
import {
	HeaderContainer,
	Name,
	PositionName,
	Summary,
	EditHeader
} from './Header.styles'
import { Header } from 'src/pages/DocumentEditor/types'

interface HeaderProps {
	updateHeader: (
		{ name, title, summary }: { name: string; title: string; summary: string }
	) => void
	header: Header
	toggleDrawer: (
		{ isVisible, section }: { isVisible: boolean; section: string }
	) => void
}

const ResumeHeader: React.FC<HeaderProps> = ({
	updateHeader,
	header,
	toggleDrawer
}) => {
	const nameRef = useRef(null)
	const positionRef = useRef(null)
	const summaryRef = useRef(null)

	const { name, title, summary } = header
	const [ isVisible, setVisibility ] = useState<boolean>(false)

	return (
		<HeaderContainer
			onMouseOver={() => setVisibility(true)}
			onMouseLeave={() => setVisibility(false)}>
			<EditHeader
				style={{ display: isVisible ? 'block' : 'none' }}
				onClick={() => toggleDrawer({ isVisible: true, section: 'header' })}>
				<EditOutlined />
			</EditHeader>
			<Name>
				<ContentEditable
					data-placeholder='Name'
					className='name'
					ref={nameRef}
					html={name}
					onChange={(e) => updateHeader({ name: e.target.value, title, summary })}
				/>
			</Name>
			<PositionName>
				<ContentEditable
					data-placeholder='Title'
					className='position'
					ref={positionRef}
					html={title}
					onChange={(e) => updateHeader({ name, title: e.target.value, summary })}
				/>
			</PositionName>
			{!!summary && (
				<Summary>
					<ContentEditable
						data-placeholder='Summary'
						className='summary'
						ref={summaryRef}
						html={summary}
						onChange={(e) => updateHeader({ name, title, summary: e.target.value })}
					/>
				</Summary>
			)}
		</HeaderContainer>
	)
}

export default ResumeHeader
