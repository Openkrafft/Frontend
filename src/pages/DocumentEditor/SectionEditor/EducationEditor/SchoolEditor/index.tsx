import React, { useState } from 'react'
import { Input, Row, DatePicker, Space, Checkbox, Button } from 'antd'
import { useActions } from 'kea'
import editorLogic from 'src/pages/DocumentEditor/logic'

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
	const { updateSchool, deleteSchool } = useActions(editorLogic)

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
					style={{ width: 474, marginBottom: 10 }}
				/>
				<span>End Date:</span>
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
					style={{ width: 474, marginBottom: 10 }}
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
			<span style={{ marginBottom: 6, display: 'block' }}>Description:</span>
			<Input.TextArea
				name='description'
				value={description}
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
				style={{ marginBottom: 10 }}
				rows={4}
				disabled={hideDescription}
			/>
			<Checkbox
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
