import React from 'react'
import { useValues } from 'kea'
import editorLogic from '../../logic'
import School from './SchoolEditor'
import { Row } from 'antd'

const EducationEditor: React.FC = () => {
	const { education: { schools } } = useValues(editorLogic)

	return (
		<Row>
			{Object.values(schools).map((school: any) => (
				<School key={school.id} {...school} />
			))}
		</Row>
	)
}

export default EducationEditor
