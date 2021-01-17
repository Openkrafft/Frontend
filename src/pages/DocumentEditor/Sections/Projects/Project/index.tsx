import React, { useState, useRef } from 'react'
import { useActions } from 'kea'
import editorLogic from '../../../logic'
import ContentEditable from 'react-contenteditable'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

import {
	ProjectContainer,
	ProjectName,
	ProjectLink,
	ProjectDescription,
	EditProject,
	DeleteProject
} from './Project.styles'

interface ProjectProps {
	id: number
	projectName: string
	link?: string
	projectDescription: string
}

const Project: React.FC<ProjectProps> = ({
	id,
	projectName,
	link,
	projectDescription
}) => {
	const projectNameRef = useRef(null)
	const linkRef = useRef(null)
	const projectDescriptionRef = useRef(null)

	const { updateProject, deleteProject } = useActions(editorLogic)
	const [ isEditVisible, setEditVisibility ] = useState<boolean>(false)

	return (
		<ProjectContainer
			onMouseOver={() => setEditVisibility(true)}
			onMouseLeave={() => setEditVisibility(false)}>
			<EditProject style={{ display: isEditVisible ? 'block' : 'none' }}>
				<EditOutlined />
			</EditProject>
			<DeleteProject
				style={{ display: isEditVisible ? 'block' : 'none' }}
				onClick={() => deleteProject(id)}>
				<DeleteOutlined />
			</DeleteProject>
			<ProjectName>
				<ContentEditable
					data-placeholder='Project name'
					className='project-name'
					ref={projectNameRef}
					html={projectName}
					onChange={(e) =>
						updateProject({
							id,
							projectName: e.target.value,
							link,
							projectDescription
						})}
				/>
			</ProjectName>
			<ProjectLink>
				<ContentEditable
					data-placeholder='Project link'
					className='project-link'
					ref={linkRef}
					html={link!}
					onChange={(e) =>
						updateProject({
							id,
							projectName,
							link: e.target.value,
							projectDescription
						})}
				/>
			</ProjectLink>
			<ProjectDescription>
				<ContentEditable
					data-placeholder='Project description'
					className='project-description'
					ref={projectDescriptionRef}
					html={projectDescription}
					onChange={(e) =>
						updateProject({
							id,
							projectName,
							link,
							projectDescription: e.target.value
						})}
				/>
			</ProjectDescription>
		</ProjectContainer>
	)
}

export default Project
