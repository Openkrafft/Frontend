import React from 'react'
import { useValues, useActions } from 'kea'
import editorLogic from '../../logic'
import Section from '../SectionWrapper'
import School from './School'
import { v4 as uuidv4 } from 'uuid'
import { School as SchoolType } from '../../types'
import globalLogic from 'src/logic'

const Education: React.FC = () => {
	const { toggleDrawer } = useActions(globalLogic)
	const { education: { educationTitle, schools } } = useValues(editorLogic)
	const { addSchool, updateEducationTitle, deleteSection } = useActions(
		editorLogic
	)
	console.log(schools)
	const newSchool: SchoolType = {
		id: `school-${uuidv4()}`,
		schoolName: '',
		degree: '',
		date: {
			startDate: '',
			endDate: ''
		},
		description: ''
	}

	return (
		<Section
			showSectionTitle
			showAddButton
			sectionTitle={educationTitle}
			onChange={(e) => updateEducationTitle(e.target.value)}
			onDeleteClick={() => deleteSection('education')}
			onAddClick={() => addSchool(newSchool)}
			onEditClick={() => toggleDrawer({ isVisible: true, section: 'education' })}>
			{Object.values(schools).map((school: any) => (
				<School key={school.id} {...school} />
			))}
		</Section>
	)
}

export default Education
