import React, { useState } from 'react'
import { EditOutlined } from '@ant-design/icons'

import {
	SkillsContainer,
	SectionTitle,
	List,
	EditSkills
} from './Skills.styles'

const skills = {
	sectionTitle: 'Technical Skills',
	description:
		'qsdf, qsdf, qsdf, qsdfqsdf, qsdfqsdf\nqsdf, qsdfqsdf\nqsdf\nqsdfqsdf\nqsdf, qsdf, qsdf'
}

const Skills: React.FC = () => {
	const [ isVisible, setVisibility ] = useState<boolean>(false)
	return (
		<SkillsContainer
			onMouseOver={() => setVisibility(true)}
			onMouseLeave={() => setVisibility(false)}>
			<EditSkills style={{ display: isVisible ? 'block' : 'none' }}>
				<EditOutlined />
			</EditSkills>
			<SectionTitle contentEditable>{skills.sectionTitle}</SectionTitle>
			<List contentEditable>
				{skills.description.split('\n').map((skill) => <li>{skill}</li>)}
			</List>
		</SkillsContainer>
	)
}

export default Skills
