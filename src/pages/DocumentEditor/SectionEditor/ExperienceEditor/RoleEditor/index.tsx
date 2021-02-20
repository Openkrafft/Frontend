import React, { useRef } from 'react'
import { Input, Row, DatePicker, Space, Button, Checkbox } from 'antd'
import { useActions } from 'kea'
import editorLogic from 'src/pages/DocumentEditor/logic'
import ContentEditable from 'react-contenteditable'
import { UnorderedListOutlined, AlignLeftOutlined } from '@ant-design/icons'

import './styles.css'

interface RoleEditorProps {
	id: string
	jobTitle: string
	companyName: string
	date: {
		startDate: string
		endDate: string
	}
	stillWorking: boolean
	roleDescription: string
}

const Role: React.FC<RoleEditorProps> = ({
	id,
	jobTitle,
	companyName,
	date: { startDate, endDate },
	stillWorking,
	roleDescription
}) => {
	const descriptionRef = useRef(null)
	const {
		updateRole,
		deleteRole,
		addDescriptionList,
		removeDescriptionList
	} = useActions(editorLogic)
	const isList = /<li>/.test(roleDescription)

	console.log('desc', roleDescription)

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
						stillWorking,
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
							stillWorking,
							roleDescription
						})}
					style={{ width: 540, marginBottom: 10 }}
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
							stillWorking,
							roleDescription
						})}
					disabled={stillWorking}
					style={{ width: 540, marginBottom: 10 }}
				/>
				<Checkbox
					style={{ marginBottom: 15 }}
					onChange={(e) =>
						updateRole({
							id,
							jobTitle,
							companyName,
							date: {
								startDate,
								endDate
							},
							stillWorking: e.target.checked,
							roleDescription
						})}>
					Still working here
				</Checkbox>
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
						stillWorking,
						roleDescription
					})}
				style={{ marginBottom: 10 }}
			/>
			<div className='text-button-container'>
				<span style={{ marginBottom: 6, display: 'block' }}>Description:</span>
				<div>
					<AlignLeftOutlined
						className='text-button'
						style={{ background: !isList ? '#d7d7d7' : '#e9e9e9' }}
						onClick={
							isList ? (
								() => removeDescriptionList(id)
							) : (
								() => {
									return
								}
							)
						}
					/>
					<UnorderedListOutlined
						className='text-button'
						style={{ marginLeft: 5, background: isList ? '#d7d7d7' : '#e9e9e9' }}
						onClick={
							!isList ? (
								() => addDescriptionList(id)
							) : (
								() => {
									return
								}
							)
						}
					/>
				</div>
			</div>
			<ContentEditable
				style={{ minHeight: 150, listStyleType: 'disc' }}
				className='job-description ant-input'
				ref={descriptionRef}
				html={roleDescription}
				onChange={(e) =>
					updateRole({
						id,
						jobTitle,
						companyName,
						date: {
							startDate,
							endDate
						},
						stillWorking,
						roleDescription: e.target.value
					})}
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
