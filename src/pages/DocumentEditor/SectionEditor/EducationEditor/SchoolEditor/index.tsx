import React from 'react'
import { Input, Row, DatePicker, Space } from 'antd'

const School: React.FC = () => {
	function onChange(date: any, dateString: string): void {
		console.log(date, dateString)
	}
	return (
		<Row style={{ marginBottom: 20 }}>
			<span>School Name:</span>
			<Input type='text' name='school-name' style={{ marginBottom: 10 }} />
			<Space direction='vertical'>
				<span>Start Date:</span>
				<DatePicker onChange={onChange} style={{ width: 474, marginBottom: 10 }} />
				<span>End Date:</span>
				<DatePicker onChange={onChange} style={{ width: 474, marginBottom: 10 }} />
			</Space>
			<span>Degree:</span>
			<Input type='text' name='degree' style={{ marginBottom: 10 }} />
			<span>Description:</span>
			<Input.TextArea name='description' style={{ marginBottom: 10 }} rows={4} />
		</Row>
	)
}

export default School
