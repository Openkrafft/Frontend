import React from 'react'
import { useValues, useActions } from 'kea'
import editorLogic from '../../logic'
import Section from '../SectionWrapper'
import { IRole } from '../../types'
import Role from './Role'
import { v4 as uuidv4 } from 'uuid'
import globalLogic from 'src/logic'

const Experience: React.FC = () => {
	const { toggleDrawer } = useActions(globalLogic)
	const { experience: { roles, experienceTitle } } = useValues(editorLogic)
	const { addRole, updateExperienceTitle, deleteSection } = useActions(
		editorLogic
	)

	const newRole = {
		id: `role-${uuidv4()}`,
		jobTitle: '',
		companyName: '',
		date: {
			startDate: '',
			endDate: ''
		},
		roleDescription: '<li></li>'
	}

	return (
		<Section
			showSectionTitle
			showAddButton
			sectionTitle={experienceTitle}
			onChange={(e) => updateExperienceTitle(e.target.value)}
			onAddClick={() => addRole(newRole)}
			onDeleteClick={() => deleteSection('experience')}
			onEditClick={() => toggleDrawer({ isVisible: true, section: 'experience' })}>
			{Object.values(roles).map((role: any) => <Role key={role.id} {...role} />)}
		</Section>
	)
}

export default Experience
