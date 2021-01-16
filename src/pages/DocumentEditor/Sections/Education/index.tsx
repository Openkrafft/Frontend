import React from 'react'
import { useValues, useActions } from 'kea'
import editorLogic from '../../logic'
import Section from '../SectionWrapper'
import School from './School'
import { School as SchoolType } from '../../types'

const Education: React.FC = () => {
	const { education: { educationTitle, schools } } = useValues(editorLogic)
	const { addSchool, updateEducationTitle, deleteSection } = useActions(
		editorLogic
	)
	const newSchool: SchoolType = {
		id: Math.floor(Math.random() * 1e8),
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
			{schools.map((school: SchoolType) => (
				<School key={school.id} {...school} />
			))}
		</Section>
	)
}

export default Education
