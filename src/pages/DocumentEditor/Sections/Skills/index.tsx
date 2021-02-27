import React, { useRef } from 'react'
import ContentEditable from 'react-contenteditable'
import { useActions } from 'kea'
import editorLogic from '../../logic'
import Section from '../SectionWrapper'

import { List } from './Skills.styles'
import globalLogic from 'src/logic'
import { SkillSection } from '../../types'

interface SkillsProps {
	skills: SkillSection
	id: string
}

const Skills: React.FC<SkillsProps> = ({
	id,
	skills: { skillsTitle, skillsList }
}) => {
	const listRef = useRef(null)
	const {
		updateSkills,
		updateSkillsTitle,
		deleteSection,
		removeSkillsSection
	} = useActions(editorLogic)
	const { toggleDrawer } = useActions(globalLogic)

	return (
		<Section
			showSectionTitle
			sectionTitle={skillsTitle}
			onChange={(e) => updateSkillsTitle(e.target.value, id)}
			onDeleteClick={() => {
				deleteSection(id)
				removeSkillsSection(id)
			}}
			onEditClick={() => toggleDrawer({ isVisible: true, section: id })}>
			<List>
				<ContentEditable
					data-placeholder='Section title'
					className='skills-list'
					ref={listRef}
					html={skillsList}
					onChange={(e) => updateSkills(e.target.value, id)}
				/>
			</List>
		</Section>
	)
}

export default Skills
