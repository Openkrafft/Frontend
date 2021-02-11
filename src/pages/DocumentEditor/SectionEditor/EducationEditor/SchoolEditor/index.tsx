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
}

const School: React.FC<SchoolEditorProps> = ({
	id,
	schoolName,
	degree,
	date: { startDate, endDate },
	description
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
						description
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
							description
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
							description
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
						description
					})}
				style={{ marginBottom: 10 }}
			/>
			<span style={{ marginBottom: 6 }}>Description:</span>
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
						description: e.target.value
					})}
				style={{ marginBottom: 10 }}
				rows={4}
			/>
			<Button type='dashed' danger block onClick={() => deleteSchool(id)}>
				Delete School
			</Button>
		</Row>
	)
}

export default School
