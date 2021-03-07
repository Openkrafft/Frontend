import React, { useState, useRef } from 'react'
import ContentEditable from 'react-contenteditable'
import { DeleteOutlined, DragOutlined } from '@ant-design/icons'

import {
	RoleContainer,
	RoleTitle,
	CompanyName,
	Date,
	JobDescription,
	DeleteRole,
	DragRole
} from './Role.styles'
import { IRole } from 'src/pages/DocumentEditor/types'

interface RoleProps {
	id: string
	jobTitle: string
	companyName: string
	date: {
		startDate: string
		endDate: string
	}
	stillWorking: boolean
	roleDescription: string
	dragProps: any
	isDragging: any
	updateRole: (role: IRole) => void
	deleteRole: (id: string) => void
}

const Role: React.FC<RoleProps> = ({
	id,
	jobTitle,
	companyName,
	date,
	stillWorking,
	roleDescription,
	dragProps,
	isDragging,
	updateRole,
	deleteRole
}) => {
	const roleTitleRef = useRef(null)
	const companyNameRef = useRef(null)
	const descriptionRef = useRef(null)
	const startDateRef = useRef(null)
	const endDateRef = useRef(null)

	const { startDate, endDate } = date
	const [ isEditVisible, setEditVisibility ] = useState<boolean>(false)

	return (
		<RoleContainer
			className='role-container'
			onMouseOver={() => setEditVisibility(true)}
			onMouseLeave={() => setEditVisibility(false)}
			style={
				isDragging ? (
					{
						backgroundColor: 'rgba(24, 144, 255, .1)',
						border: '1px dashed rgba(24, 144, 255, .6)',
						transition: '.1s ease-in-out'
					}
				) : (
					{}
				)
			}>
			<DragRole
				style={{ display: isEditVisible ? 'block' : 'none' }}
				{...dragProps}>
				<DragOutlined style={{ fontSize: 18 }} />
			</DragRole>
			<DeleteRole
				style={{ display: isEditVisible ? 'block' : 'none' }}
				onClick={() => deleteRole(id)}>
				<DeleteOutlined />
			</DeleteRole>
			<RoleTitle>
				<ContentEditable
					data-placeholder='Position'
					className='role-title'
					ref={roleTitleRef}
					html={jobTitle}
					onChange={(e) =>
						updateRole({
							id,
							jobTitle: e.target.value,
							companyName,
							date,
							stillWorking,
							roleDescription
						})}
				/>
			</RoleTitle>
			<CompanyName>
				<ContentEditable
					data-placeholder='Company name'
					className='company-name'
					ref={companyNameRef}
					html={companyName}
					onChange={(e) =>
						updateRole({
							id,
							jobTitle,
							companyName: e.target.value,
							date,
							stillWorking,
							roleDescription
						})}
				/>
			</CompanyName>
			<Date>
				<ContentEditable
					data-placeholder='Start date'
					className='start-date'
					ref={startDateRef}
					html={startDate}
					onChange={(e) =>
						updateRole({
							id,
							jobTitle,
							companyName,
							date: { startDate: e.target.value, endDate },
							stillWorking,
							roleDescription
						})}
				/>
				<span className='date-seperator'> - </span>
				<ContentEditable
					data-placeholder='End date'
					className='end-date'
					ref={endDateRef}
					html={stillWorking ? 'Present' : endDate}
					onChange={(e) =>
						updateRole({
							id,
							jobTitle,
							companyName,
							date: { startDate, endDate: e.target.value },
							stillWorking,
							roleDescription
						})}
				/>
			</Date>
			<JobDescription>
				<ContentEditable
					data-placeholder='Description'
					className='job-description'
					ref={descriptionRef}
					html={roleDescription}
					onChange={(e) =>
						updateRole({
							id,
							jobTitle,
							companyName,
							date,
							stillWorking,
							roleDescription: e.target.value
						})}
				/>
			</JobDescription>
		</RoleContainer>
	)
}

export default Role
