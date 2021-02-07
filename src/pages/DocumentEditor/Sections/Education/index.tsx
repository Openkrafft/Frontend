import React from 'react'
import { useValues, useActions } from 'kea'
import editorLogic from '../../logic'
import Section from '../SectionWrapper'
import School from './School'
import { v4 as uuidv4 } from 'uuid'
import { School as SchoolType } from '../../types'

const Education: React.FC = () => {
	const { education: { educationTitle, schools } } = useValues(editorLogic)
	const { addSchool, updateEducationTitle, deleteSection } = useActions(
		editorLogic
	)
	const newSchool: SchoolType = {
		id: `school-${uuidv4()}`,
		schoolName: '',
		degree: '',
		date: {
			startDate: '',
			endDate: ''
		},
		description: '<li></li>'
	}

	return (
		<Section
			showSectionTitle
			showAddButton
			sectionTitle={educationTitle}
			onChange={(e) => updateEducationTitle(e.target.value)}
			onDeleteClick={() => deleteSection('education')}
			onAddClick={() => addSchool(newSchool)}>
			{Object.values(schools).map((school: any) => (
				<School key={school.id} {...school} />
			))}
		</Section>
	)
}

export default Education
