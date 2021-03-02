import React from 'react'
import { Input, Row, Button } from 'antd'
import { useActions } from 'kea'
import editorLogic from 'src/pages/DocumentEditor/logic'

interface ProjectEditorProps {
	id: string
	projectName: string
	link: string
	projectDescription: string
}

const Project: React.FC<ProjectEditorProps> = ({
	id,
	projectName,
	link,
	projectDescription
}) => {
	const { updateProject, deleteProject } = useActions(editorLogic)

	return (
		<Row style={{ marginBottom: 50 }}>
			<span style={{ marginBottom: 6 }}>Project Name:</span>
			<Input
				placeholder='Project name'
				type='text'
				name='project-name'
				value={projectName}
				onChange={(e) =>
					updateProject({
						id,
						projectName: e.target.value,
						link,
						projectDescription
					})}
				style={{ marginBottom: 10 }}
			/>
			<span style={{ marginBottom: 6 }}>Link:</span>
			<Input
				placeholder='Project link: website, github, dribbble...'
				type='text'
				name='link'
				value={link}
				onChange={(e) =>
					updateProject({
						id,
						projectName,
						link: e.target.value,
						projectDescription
					})}
				style={{ marginBottom: 10 }}
			/>
			<span style={{ marginBottom: 6, display: 'block' }}>Description:</span>
			<Input.TextArea
				name='description'
				value={projectDescription}
				onChange={(e) =>
					updateProject({
						id,
						projectName,
						link,
						projectDescription: e.target.value
					})}
				style={{ marginBottom: 10 }}
				rows={4}
			/>
			<Button
				type='dashed'
				danger
				block
				onClick={() => deleteProject(id)}
				style={{ marginTop: 20 }}>
				Delete Project
			</Button>
		</Row>
	)
}

export default Project
