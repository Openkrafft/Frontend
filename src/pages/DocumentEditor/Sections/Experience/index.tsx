import React, { useState, useRef } from 'react'
import { useValues, useActions } from 'kea'
import editorLogic from '../../logic'
import Section from '../SectionWrapper'
import { IRole } from '../../types'
import Role from './Role'

const Experience: React.FC = () => {
	const { experience: { roles, experienceTitle } } = useValues(editorLogic)
	const { addRole, updateExperienceTitle } = useActions(editorLogic)

	const newRole = {
		roleId: Math.floor(Math.random() * 1e10),
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
			onAddClick={() => addRole(newRole)}>
			{roles.map((role: IRole) => <Role key={role.roleId} {...role} />)}
		</Section>
	)
}

export default Experience
