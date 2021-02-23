import React, { useRef } from 'react'
import { Input, Row, DatePicker, Space, Checkbox, Button } from 'antd'
import { useActions } from 'kea'
import ContentEditable from 'react-contenteditable'
import editorLogic from '../../../logic'
import { UnorderedListOutlined, AlignLeftOutlined } from '@ant-design/icons'

import './styles.css'

interface SchoolEditorProps {
	id: string
	schoolName: string
	degree: string
	date: {
		startDate: string
		endDate: string
	}
	description: string
	hideDescription: boolean
}

const School: React.FC<SchoolEditorProps> = ({
	id,
	schoolName,
	degree,
	date: { startDate, endDate },
	description,
	hideDescription
}) => {
	const descriptionRef = useRef(null)
	const {
		updateSchool,
		deleteSchool,
		addSchoolDescriptionList,
		removeSchoolDescriptionList
	} = useActions(editorLogic)
	const isList = /<li>/.test(description)

	return (
		<Row style={{ marginBottom: 50 }}>
			<span style={{ marginBottom: 6 }}>School Name:</span>
			<Input
				type='text'
				name='school-name'
				value={schoolName}
				onChange={(e) =>
					updateSchool({
						id,
						schoolName: e.target.value,
						degree,
						date: {
							startDate,
							endDate
						},
						description,
						hideDescription
					})}
				style={{ marginBottom: 10 }}
			/>
			<Space direction='vertical'>
				<span>Start Date:</span>
				<DatePicker
					onChange={(date: any, dateString: string): void =>
						updateSchool({
							id,
							schoolName,
							degree,
							date: {
								startDate: dateString,
								endDate
							},
							description,
							hideDescription
						})}
					style={{ width: 554, marginBottom: 10 }}
				/>
				<span>Graduation Date:</span>
				<DatePicker
					onChange={(date: any, dateString: string): void =>
						updateSchool({
							id,
							schoolName,
							degree,
							date: {
								startDate,
								endDate: dateString
							},
							description,
							hideDescription
						})}
					style={{ width: 554, marginBottom: 10 }}
				/>
			</Space>
			<span style={{ marginBottom: 6 }}>Degree:</span>
			<Input
				type='text'
				name='degree'
				value={degree}
				onChange={(e) =>
					updateSchool({
						id,
						schoolName,
						degree: e.target.value,
						date: {
							startDate,
							endDate
						},
						description,
						hideDescription
					})}
				style={{ marginBottom: 10 }}
			/>
			<div className='text-button-container'>
				<span style={{ marginBottom: 6, display: 'block' }}>Description:</span>
				<div>
					<AlignLeftOutlined
						className='text-button'
						style={{ background: !isList ? '#c7c7c7' : '#e9e9e9' }}
						onClick={
							isList ? (
								() => removeSchoolDescriptionList(id)
							) : (
								() => {
									return
								}
							)
						}
					/>
					<UnorderedListOutlined
						className='text-button'
						style={{ marginLeft: 5, background: isList ? '#c7c7c7' : '#e9e9e9' }}
						onClick={
							!isList ? (
								() => addSchoolDescriptionList(id)
							) : (
								() => {
									return
								}
							)
						}
					/>
				</div>
			</div>
			<Checkbox
				style={{ marginBottom: 15 }}
				onChange={(e) =>
					updateSchool({
						id,
						schoolName,
						degree,
						date: {
							startDate,
							endDate
						},
						description,
						hideDescription: e.target.checked
					})}>
				Hide Description Field
			</Checkbox>
			<ContentEditable
				disabled={hideDescription}
				style={{ minHeight: 150, listStyleType: 'disc' }}
				className='school-description ant-input'
				ref={descriptionRef}
				html={description}
				onChange={(e) =>
					updateSchool({
						id,
						schoolName,
						degree,
						date: {
							startDate,
							endDate
						},
						description: e.target.value,
						hideDescription
					})}
			/>
			<Button
				type='dashed'
				danger
				block
				onClick={() => deleteSchool(id)}
				style={{ marginTop: 20 }}>
				Delete School
			</Button>
		</Row>
	)
}

export default School
