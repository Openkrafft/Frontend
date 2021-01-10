import React, { useState, useRef } from 'react'
import ContentEditable from 'react-contenteditable'
import { EditOutlined } from '@ant-design/icons'

import {
	SkillsContainer,
	SectionTitle,
	List,
	EditSkills
} from './Skills.styles'

const skills = {
	sectionTitle: 'Technical Skills',
	skillsList: [ 'html', 'python', 'js' ]
}

const Skills: React.FC = () => {
	const listRef = useRef(null)
	const titletRef = useRef(null)
	const [ isVisible, setVisibility ] = useState<boolean>(false)
	const [ titleHtmlContent, setTitleHtmlContent ] = useState<string>(
		`${skills.sectionTitle}`
	)
	const [ listHtmlContent, setListHtmlContent ] = useState<string>(
		'<li>Hello</li>'
	)

	return (
		<SkillsContainer
			onMouseOver={() => setVisibility(true)}
			onMouseLeave={() => setVisibility(false)}>
			<EditSkills style={{ display: isVisible ? 'block' : 'none' }}>
				<EditOutlined />
			</EditSkills>
			<SectionTitle>
				<ContentEditable
					className='skills-title'
					ref={titletRef}
					html={titleHtmlContent}
					onChange={(e) => setTitleHtmlContent(e.target.value)}
				/>
			</SectionTitle>
			<List>
				<ContentEditable
					data-placeholder='Section title'
					className='skills-list'
					ref={listRef}
					html={listHtmlContent}
					onChange={(e) => setListHtmlContent(e.target.value)}
				/>
			</List>
		</SkillsContainer>
	)
}

export default Skills
