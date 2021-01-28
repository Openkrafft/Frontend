import React, { useState } from 'react'
import { useValues, useActions } from 'kea'
import editorLogic from '../../logic'
import { Form, Row, Input, Button, Col } from 'antd'
import { extractTextFromHTML } from 'src/utils'
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons'
import globalLogic from 'src/logic'

const SkillsEditor: React.FC = () => {
	const { drawer: { sectionId } } = useValues(globalLogic)
	const { skills } = useValues(editorLogic)
	const { addSkills, removeSkills } = useActions(editorLogic)
	const skillsList = extractTextFromHTML(skills[sectionId].skillsList)
	const [ skill, setSkill ] = useState('')

	return (
		<Form layout='vertical' hideRequiredMark>
			<Row gutter={16} style={{ paddingLeft: 0 }}>
				<Col>
					<Input
						placeholder='Add new skill'
						style={{ width: 350, marginBottom: 10 }}
						value={skill}
						onChange={(e) => setSkill(e.target.value)}
						onPressEnter={() => {
							if (skill) {
								addSkills(skill, sectionId)
								setSkill('')
							}
						}}
					/>
				</Col>
				<Col style={{ paddingLeft: 0 }}>
					<Button
						icon={<PlusOutlined />}
						onClick={() => {
							if (skill) {
								addSkills(skill, sectionId)
								setSkill('')
							}
						}}>
						Add
					</Button>
				</Col>
			</Row>
			<Row gutter={20} style={{ marginLeft: 0, display: 'block', marginTop: 10 }}>
				{skillsList.length ? (
					skillsList.map((skill: string, index: number) => (
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center'
							}}>
							<li
								style={{ listStyleType: 'disc', margin: '5px 0' }}
								key={`skill#${index}`}>
								{skill}
							</li>
							<DeleteOutlined
								style={{ cursor: 'pointer' }}
								onClick={() => removeSkills(skill, sectionId)}
							/>
						</div>
					))
				) : (
					<p>List is Empty</p>
				)}
			</Row>
		</Form>
	)
}

export default SkillsEditor
