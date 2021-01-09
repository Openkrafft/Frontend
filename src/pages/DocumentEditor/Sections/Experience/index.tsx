import React, { useState, useRef } from 'react'
import ContentEditable from 'react-contenteditable'
import { PlusOutlined } from '@ant-design/icons'
import Role from './Role'

import { ExperienceContainer, SectionTitle, AddRole } from './Experience.styles'

const experience = {
	sectionTitle: 'Experience',
	roles: [
		{
			roleId: 56546546546,
			jobTitle: 'Senior Frontend Developer',
			companyName: 'Apprentus',
			date: {
				startDate: '01/2020',
				endDate: '02/2021'
			},
			stillWorking: false,
			roleDescription: '<li></li>'
		},
		{
			roleId: 654654654654,
			jobTitle: 'Senior Frontend Developer',
			companyName: 'Apprentus',
			startDate: '01/2020',
			date: {
				startDate: '01/2020',
				endDate: '10/2020'
			},
			stillWorking: true,
			roleDescription: '<li></li>'
		}
	]
}

const Experience: React.FC = () => {
	const titleRef = useRef(null)
	const { roles } = experience
	const [ isEditVisible, setEditVisibility ] = useState<boolean>(false)
	const [ titleHtmlContent, setTitle ] = useState<string>(
		experience.sectionTitle
	)

	return (
		<ExperienceContainer
			onMouseOver={() => setEditVisibility(true)}
			onMouseLeave={() => setEditVisibility(false)}>
			{roles.length > 0 && (
				<AddRole style={{ display: isEditVisible ? 'block' : 'none' }}>
					<PlusOutlined />
				</AddRole>
			)}
			<SectionTitle>
				<ContentEditable
					data-placeholder='Section title'
					className='section-title'
					ref={titleRef}
					html={titleHtmlContent}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</SectionTitle>
			{roles.map((role) => <Role key={role.roleId} {...role} />)}
		</ExperienceContainer>
	)
}

export default Experience
