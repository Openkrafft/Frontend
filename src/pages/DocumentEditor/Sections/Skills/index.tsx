import React, { useRef } from 'react'
import ContentEditable from 'react-contenteditable'
import { useValues, useActions } from 'kea'
import editorLogic from '../../logic'
import Section from '../SectionWrapper'

import { List } from './Skills.styles'

const Skills: React.FC = () => {
	const listRef = useRef(null)
	const { updateSkills, updateSkillsTitle } = useActions(editorLogic)
	const { skills: { skillsTitle, skillsList } } = useValues(editorLogic)

	return (
		<Section
			showSectionTitle
			sectionTitle={skillsTitle}
			onChange={(e) => updateSkillsTitle(e.target.value)}>
			<List>
				<ContentEditable
					data-placeholder='Section title'
					className='skills-list'
					ref={listRef}
					html={skillsList}
					onChange={(e) => updateSkills(e.target.value)}
				/>
			</List>
		</Section>
	)
}

export default Skills
