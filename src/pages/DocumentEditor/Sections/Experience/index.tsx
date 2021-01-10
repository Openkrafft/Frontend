import React, { useState, useRef } from 'react'
import { useValues, useActions } from 'kea'
import editorLogic from '../../logic'
import ContentEditable from 'react-contenteditable'
import { IRole } from '../../types'
import { PlusOutlined } from '@ant-design/icons'
import Role from './Role'

import { ExperienceContainer, SectionTitle, AddRole } from './Experience.styles'

const Experience: React.FC = () => {
	const titleRef = useRef(null)
	const { experience } = useValues(editorLogic)
	const { addRole } = useActions(editorLogic)
	const { roles } = experience
	const [ isEditVisible, setEditVisibility ] = useState<boolean>(false)
	const [ titleHtmlContent, setTitle ] = useState<string>(
		experience.sectionTitle
	)

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
		<ExperienceContainer
			onMouseOver={() => setEditVisibility(true)}
			onMouseLeave={() => setEditVisibility(false)}>
			<AddRole
				style={{ display: isEditVisible ? 'block' : 'none' }}
				onClick={() => addRole(newRole)}>
				<PlusOutlined />
			</AddRole>
			<SectionTitle>
				<ContentEditable
					data-placeholder='Section title'
					className='section-title'
					ref={titleRef}
					html={titleHtmlContent}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</SectionTitle>
			{roles.map((role: IRole) => <Role key={role.roleId} {...role} />)}
		</ExperienceContainer>
	)
}

export default Experience
