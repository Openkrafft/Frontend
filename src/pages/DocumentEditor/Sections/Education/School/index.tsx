import React, { useRef, useState } from 'react'
import { useActions } from 'kea'
import editorLogic from '../../../logic'
import ContentEditable from 'react-contenteditable'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

import {
	SchoolContainer,
	SchoolWrapper,
	SchoolName,
	Degree,
	Date,
	Description,
	EditSchool,
	DeleteSchool
} from './School.styles'

interface SchoolProps {
	id: number
	schoolName: string
	degree: string
	date: {
		startDate: string
		endDate: string
	}
	description: string
}

const School: React.FC<SchoolProps> = ({
	id,
	schoolName,
	degree,
	date,
	description
}) => {
	const schoolTitleRef = useRef(null)
	const degreeRef = useRef(null)
	const descriptionRef = useRef(null)
	const startDateRef = useRef(null)
	const endDateRef = useRef(null)

	const { startDate, endDate } = date
	const { updateSchool, deleteSchool } = useActions(editorLogic)
	const [ isEditVisible, setEditVisibility ] = useState<boolean>(false)

	return (
		<SchoolContainer
			onMouseOver={() => setEditVisibility(true)}
			onMouseLeave={() => setEditVisibility(false)}>
			<EditSchool style={{ display: isEditVisible ? 'block' : 'none' }}>
				<EditOutlined />
			</EditSchool>
			<DeleteSchool
				style={{ display: isEditVisible ? 'block' : 'none' }}
				onClick={() => deleteSchool(id)}>
				<DeleteOutlined />
			</DeleteSchool>
			<SchoolWrapper>
				<SchoolName>
					<ContentEditable
						data-placeholder='School name'
						className='school-name'
						ref={schoolTitleRef}
						html={schoolName}
						onChange={(e) =>
							updateSchool({
								id,
								schoolName: e.target.value,
								degree,
								date,
								description
							})}
					/>
				</SchoolName>
				<Date>
					<ContentEditable
						data-placeholder='Start date'
						className='start-date'
						ref={startDateRef}
						html={startDate}
						onChange={(e) =>
							updateSchool({
								id,
								schoolName,
								degree,
								date: { startDate: e.target.value, endDate },
								description
							})}
					/>
					<span className='date-seperator'> - </span>
					<ContentEditable
						data-placeholder='End date'
						className='end-date'
						ref={endDateRef}
						html={endDate}
						onChange={(e) =>
							updateSchool({
								id,
								schoolName,
								degree,
								date: { startDate, endDate: e.target.value },
								description
							})}
					/>
				</Date>
			</SchoolWrapper>
			<Degree>
				<ContentEditable
					data-placeholder='Degree'
					className='degree'
					ref={degreeRef}
					html={degree}
					onChange={(e) =>
						updateSchool({
							id,
							schoolName,
							degree: e.target.value,
							date,
							description
						})}
				/>
			</Degree>
			<Description>
				<ContentEditable
					className='description'
					ref={descriptionRef}
					html={description}
					onChange={(e) =>
						updateSchool({
							id,
							schoolName,
							degree,
							date,
							description: e.target.value
						})}
				/>
			</Description>
		</SchoolContainer>
	)
}

export default School
