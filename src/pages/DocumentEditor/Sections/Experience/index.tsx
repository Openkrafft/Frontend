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
	const { roles } = experience
	const [ isEditVisible, setEditVisibility ] = useState<boolean>(false)
	const [ title, setTitle ] = useState<string>(experience.sectionTitle)

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
			<SectionTitle
				type='text'
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			{roles.map((role) => {
				return (
					<Role>
						<RoleTitle type='text' />
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
