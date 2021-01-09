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

const generalInfo = {
	name: 'John Doe',
	position: 'Software Engineer',
	summary:
		'Enthusiastic software engineer with 3+ years experience participating inthe complete product development lifecycle of successfully launchedapplications. Proficient in an assortment of technologies, includingJavaScript, TypeScript, React, Node.js, and PostgreSQL.'
}

const ResumeHeader: React.FC = () => {
	const nameRef = useRef(null)
	const positionRef = useRef(null)
	const summaryRef = useRef(null)
	const [ isVisible, setVisibility ] = useState<boolean>(false)
	const [ nameHtmlContent, setName ] = useState<string>(generalInfo.name)
	const [ positionHtmlContent, setPosition ] = useState<string>(
		generalInfo.position
	)
	const [ summaryHtmlContent, setSummary ] = useState<string>(
		generalInfo.summary
	)
	return (
		<HeaderContainer
			onMouseOver={() => setVisibility(true)}
			onMouseLeave={() => setVisibility(false)}>
			<EditHeader style={{ display: isVisible ? 'block' : 'none' }}>
				<EditOutlined />
			</EditHeader>
			<Name>
				<ContentEditable
					data-placeholder='Name'
					className='name'
					ref={nameRef}
					html={nameHtmlContent}
					onChange={(e) => setName(e.target.value)}
				/>
			</Name>
			<PositionName>
				<ContentEditable
					data-placeholder='Title'
					className='position'
					ref={positionRef}
					html={positionHtmlContent}
					onChange={(e) => setPosition(e.target.value)}
				/>
			</PositionName>
			{!!generalInfo.summary && (
				<Summary>
					<ContentEditable
						data-placeholder='Summary'
						className='summary'
						ref={summaryRef}
						html={summaryHtmlContent}
						onChange={(e) => setSummary(e.target.value)}
					/>
				</Summary>
			)}
		</HeaderContainer>
	)
}

export default ResumeHeader
