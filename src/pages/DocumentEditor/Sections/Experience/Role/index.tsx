import React, { useState, useRef } from 'react'
import ContentEditable from 'react-contenteditable'
import { EditOutlined } from '@ant-design/icons'

import {
	RoleContainer,
	RoleTitle,
	CompanyName,
	Date,
	JobDescription,
	EditRole
} from './Role.styles'

interface RoleProps {
	jobTitle: string
	companyName: string
	date: {
		startDate: string
		endDate: string
	}
	roleDescription: string
}

const Role: React.FC<RoleProps> = ({
	jobTitle,
	companyName,
	date,
	roleDescription
}) => {
	const roleTitleRef = useRef(null)
	const companyNameRef = useRef(null)
	const descriptionRef = useRef(null)
	const startDateRef = useRef(null)
	const endDateRef = useRef(null)

	const [ title, setTitle ] = useState<string>(jobTitle)
	const [ company, setCompanyName ] = useState<string>(companyName)
	const [ description, setRoleDescription ] = useState<string>(roleDescription)
	const [ startDate, setStartDate ] = useState<string>(date.startDate)
	const [ endDate, setEndDate ] = useState<string>(date.endDate)
	const [ isEditVisible, setEditVisibility ] = useState<boolean>(false)

	return (
		<RoleContainer
			className='role-container'
			onMouseOver={() => setEditVisibility(true)}
			onMouseLeave={() => setEditVisibility(false)}>
			<EditRole style={{ display: isEditVisible ? 'block' : 'none' }}>
				<EditOutlined />
			</EditRole>
			<RoleTitle>
				<ContentEditable
					data-placeholder='Role title'
					className='role-title'
					ref={roleTitleRef}
					html={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</RoleTitle>
			<CompanyName>
				<ContentEditable
					data-placeholder='Company name'
					className='company-name'
					ref={companyNameRef}
					html={company}
					onChange={(e) => setCompanyName(e.target.value)}
				/>
			</CompanyName>
			<Date>
				<ContentEditable
					data-placeholder='Start date'
					className='start-date'
					ref={startDateRef}
					html={startDate}
					onChange={(e) => setStartDate(e.target.value)}
				/>
				<span className='date-seperator'> - </span>
				<ContentEditable
					data-placeholder='End date'
					className='end-date'
					ref={endDateRef}
					html={endDate}
					onChange={(e) => setEndDate(e.target.value)}
				/>
			</Date>
			<JobDescription>
				<ContentEditable
					className='job-description'
					ref={descriptionRef}
					html={description}
					onChange={(e) => setRoleDescription(e.target.value)}
				/>
			</JobDescription>
		</RoleContainer>
	)
}

export default Role
