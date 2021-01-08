import React, { useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
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
	const [ name, setName ] = useState<string>(generalInfo.name)
	const [ position, setPosition ] = useState<string>(generalInfo.position)
	const [ summary, setSummary ] = useState<string>(generalInfo.summary)
	return (
		<HeaderContainer
			onMouseOver={() => setVisibility(true)}
			onMouseLeave={() => setVisibility(false)}>
			<EditHeader style={{ display: isVisible ? 'block' : 'none' }}>
				<EditOutlined />
			</EditHeader>
			<Name
				type='text'
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<PositionName
				type='text'
				value={position}
				onChange={(e) => setPosition(e.target.value)}
			/>
			{!!generalInfo.summary && (
				<Summary>
					<TextareaAutosize
						rows={4}
						style={{ height: 100 }}
						defaultValue={summary}
						onChange={(e) => setSummary(e.target.value)}
						className='summary'
					/>
				</Summary>
			)}
		</HeaderContainer>
	)
}

export default ResumeHeader
