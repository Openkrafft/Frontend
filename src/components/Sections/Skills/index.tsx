import React, { ChangeEvent, useRef } from 'react'
import ContentEditable from 'react-contenteditable'
import Section from '../SectionWrapper'

import { List } from './Skills.styles'
import globalLogic from 'src/logic'
import { SkillSection } from '../../../pages/DocumentEditor/types'

interface SkillsProps {
	skills: SkillSection
	id: string
	toggleDrawer: (
		{ isVisible, section }: { isVisible: boolean; section: string }
	) => void
	updateSkills: (skillsList: string, id: string) => void
	updateSkillsTitle: (e: ChangeEvent<HTMLDivElement>, id: string) => void
	deleteSection: (id: string) => void
	removeSkillsSection: (id: string) => void
}

const Skills: React.FC<SkillsProps> = ({
	id,
	skills: { skillsTitle, skillsList },
	updateSkills,
	updateSkillsTitle,
	deleteSection,
	removeSkillsSection,
	toggleDrawer
}) => {
	const listRef = useRef(null)

	return (
		<Section
			showSectionTitle
			currentSectionId={id}
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
