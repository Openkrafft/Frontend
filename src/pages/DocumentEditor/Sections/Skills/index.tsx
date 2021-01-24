import React, { useRef } from 'react'
import ContentEditable from 'react-contenteditable'
import { useValues, useActions } from 'kea'
import editorLogic from '../../logic'
import Section from '../SectionWrapper'

import { List } from './Skills.styles'
import globalLogic from 'src/logic'

const Skills: React.FC = () => {
	const listRef = useRef(null)
	const { updateSkills, updateSkillsTitle, deleteSection } = useActions(
		editorLogic
	)
	const { toggleDrawer } = useActions(globalLogic)
	const { skills: { skillsTitle, skillsList } } = useValues(editorLogic)

	return (
		<Section
			showSectionTitle
			sectionTitle={skillsTitle}
			onChange={(e) => updateSkillsTitle(e.target.value)}
			onDeleteClick={() => deleteSection('skills')}
			onEditClick={() => toggleDrawer({ isVisible: true, section: 'skills' })}>
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
