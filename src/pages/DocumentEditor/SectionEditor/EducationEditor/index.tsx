import React from 'react'
import { useActions, useValues } from 'kea'
import editorLogic from '../../logic'
import School from './SchoolEditor'
import { Button, Input, Row } from 'antd'

const EducationEditor: React.FC = () => {
	const { education: { schools } } = useValues(editorLogic)
	const { addSchool } = useActions(editorLogic)

	return (
		<Row>
			{Object.values(schools).map((school) => <School />)}
			<Button type='dashed' block>
				Add School
			</Button>
		</Row>
	)
}

export default EducationEditor
