import React from 'react'
import { Input, Row, DatePicker, Space, Button } from 'antd'
import { useActions } from 'kea'
import editorLogic from 'src/pages/DocumentEditor/logic'

interface RoleEditorProps {
	id: string
	jobTitle: string
	companyName: string
	date: {
		startDate: string
		endDate: string
	}
	roleDescription: string
}

const Role: React.FC<RoleEditorProps> = ({
	id,
	jobTitle,
	companyName,
	date: { startDate, endDate },
	roleDescription
}) => {
	const { updateRole, deleteRole } = useActions(editorLogic)

	return (
		<Row style={{ marginBottom: 50 }}>
			<span style={{ marginBottom: 6 }}>Position:</span>
			<Input
				type='text'
				name='job-title'
				value={jobTitle}
				onChange={(e) =>
					updateRole({
						id,
						jobTitle: e.target.value,
						companyName,
						date: {
							startDate,
							endDate
						},
						roleDescription
					})}
				style={{ marginBottom: 10 }}
			/>
			<Space direction='vertical'>
				<span>Start Date:</span>
				<DatePicker
					onChange={(date: any, dateString: string): void =>
						updateRole({
							id,
							jobTitle,
							companyName,
							date: {
								startDate: dateString,
								endDate
							},
							roleDescription
						})}
					style={{ width: 474, marginBottom: 10 }}
				/>
				<span>End Date:</span>
				<DatePicker
					onChange={(date: any, dateString: string): void =>
						updateRole({
							id,
							jobTitle,
							companyName,
							date: {
								startDate,
								endDate: dateString
							},
							roleDescription
						})}
					style={{ width: 474, marginBottom: 10 }}
				/>
			</Space>
			<span style={{ marginBottom: 6 }}>Company Name:</span>
			<Input
				type='text'
				name='company-name'
				value={companyName}
				onChange={(e) =>
					updateRole({
						id,
						jobTitle,
						companyName: e.target.value,
						date: {
							startDate,
							endDate
						},
						roleDescription
					})}
				style={{ marginBottom: 10 }}
			/>
			<span style={{ marginBottom: 6, display: 'block' }}>Description:</span>
			<Input.TextArea
				name='description'
				value={roleDescription}
				onChange={(e) =>
					updateRole({
						id,
						jobTitle,
						companyName,
						date: {
							startDate,
							endDate
						},
						roleDescription: e.target.value
					})}
				style={{ marginBottom: 10 }}
				rows={4}
			/>
			<Button
				type='dashed'
				danger
				block
				onClick={() => deleteRole(id)}
				style={{ marginTop: 20 }}>
				Delete Role
			</Button>
		</Row>
	)
}

export default Role
