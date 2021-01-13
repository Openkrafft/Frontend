import React, { useRef } from 'react'
import ContentEditable from 'react-contenteditable'
import { useValues, useActions } from 'kea'
import editorLogic from '../../logic'
import Section from '../SectionWrapper'

import { List } from './Skills.styles'

const Skills: React.FC = () => {
	const listRef = useRef(null)
	const { updateSkills } = useActions(editorLogic)
	const { skills: { sectionTitle, skillsList } } = useValues(editorLogic)

	return (
		<Section showSectionTitle sectionTitle={sectionTitle}>
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
