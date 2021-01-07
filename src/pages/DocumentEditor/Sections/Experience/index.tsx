import React, { useState } from 'react'
import { EditOutlined, PlusOutlined } from '@ant-design/icons'

import {
	ExperienceContainer,
	SectionTitle,
	List,
	Role,
	RoleTitle,
	CompanyName,
	Date,
	EditExperience,
	AddRole
} from './Experience.styles'

const experience = {
	sectionTitle: 'Experience',
	roles: [
		{
			title: 'Senior Frontend Developer',
			companyName: 'Apprentus',
			startDate: '01/2020',
			endDate: '02/2021',
			stillWorking: false,
			description:
				'qslkdjfhhlkqsjdhflkjqhsdflkjhqsldkjfhfhlqksjdhfhflkqjshdff\nqsmdlkffjqmlskdfjjmqlskdjff\nqsdmfjqsmldkffjmqlskdfjj'
		},
		{
			title: 'Senior Frontend Developer',
			companyName: 'Apprentus',
			startDate: '01/2020',
			endDate: null,
			stillWorking: true,
			description:
				'qslkdjfhhlkqsjdhflkjqhsdflkjhqsldkjfhfhlqksjdhfhflkqjshdff\nqsmdlkffjqmlskdfjjmqlskdjff\nqsdmfjqsmldkffjmqlskdfjj'
		}
	]
}

const Experience: React.FC = () => {
	const [ isEditVisible, setEditVisibility ] = useState<boolean>(false)
	const { roles } = experience
	return (
		<ExperienceContainer
			onMouseOver={() => setEditVisibility(true)}
			onMouseLeave={() => setEditVisibility(false)}>
			<EditExperience style={{ display: isEditVisible ? 'block' : 'none' }}>
				<EditOutlined />
			</EditExperience>
			{roles.length > 0 && (
				<AddRole style={{ display: isEditVisible ? 'block' : 'none' }}>
					<PlusOutlined />
				</AddRole>
			)}
			<SectionTitle contentEditable>Experience</SectionTitle>
			{roles.map((role) => {
				return (
					<Role>
						<RoleTitle contentEditable>{role.title}</RoleTitle>
						<CompanyName contentEditable>{role.companyName}</CompanyName>
						<Date>
							{role.startDate} - {role.stillWorking ? 'Present' : role.endDate}
						</Date>
						<List contentEditable>
							{role.description.split('\n').map((line) => <li>{line}</li>)}
						</List>
					</Role>
				)
			})}
		</ExperienceContainer>
	)
}

export default Experience
