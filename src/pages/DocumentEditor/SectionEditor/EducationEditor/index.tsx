import React from 'react'
import { useActions, useValues } from 'kea'
import editorLogic from '../../logic'
import School from './SchoolEditor'
import { Row } from 'antd'
import { School as SchoolType } from '../../types'

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
