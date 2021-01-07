import React, { useState } from 'react'
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
	const [ isVisible, setVisibility ] = useState<boolean>(false)
	return (
		<HeaderContainer
			onMouseOver={() => setVisibility(true)}
			onMouseLeave={() => setVisibility(false)}>
			<EditHeader style={{ display: isVisible ? 'block' : 'none' }}>
				<EditOutlined />
			</EditHeader>
			<Name contentEditable>{generalInfo.name}</Name>
			<PositionName contentEditable>{generalInfo.position}</PositionName>
			{!!generalInfo.summary && (
				<Summary contentEditable>{generalInfo.summary}</Summary>
			)}
		</HeaderContainer>
	)
}

export default ResumeHeader
