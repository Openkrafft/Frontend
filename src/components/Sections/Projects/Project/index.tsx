import React, { useState, useRef } from 'react'
import ContentEditable from 'react-contenteditable'
import { DeleteOutlined, DragOutlined } from '@ant-design/icons'

import {
	ProjectContainer,
	ProjectName,
	ProjectLink,
	ProjectDescription,
	DragProject,
	DeleteProject
} from './Project.styles'
import { Project as ProjectType } from 'src/pages/DocumentEditor/types'

interface ProjectProps {
	id: string
	projectName: string
	link?: string
	projectDescription: string
	dragProps: any
	isDragging: any
	updateProject: (project: ProjectType) => void
	deleteProject: (id: string) => void
}

const Project: React.FC<ProjectProps> = ({
	id,
	projectName,
	link,
	projectDescription,
	dragProps,
	isDragging,
	updateProject,
	deleteProject
}) => {
	const projectNameRef = useRef(null)
	const linkRef = useRef(null)
	const projectDescriptionRef = useRef(null)

	const [ isEditVisible, setEditVisibility ] = useState<boolean>(false)

	return (
		<ProjectContainer
			onMouseOver={() => setEditVisibility(true)}
			onMouseLeave={() => setEditVisibility(false)}
			style={
				isDragging ? (
					{
						backgroundColor: 'rgba(24, 144, 255, .1)',
						border: '1px dashed rgba(24, 144, 255, .6)',
						transition: '.1s ease-in-out'
					}
				) : (
					{}
				)
			}>
			<DragProject
				style={{ display: isEditVisible ? 'block' : 'none' }}
				{...dragProps}>
				<DragOutlined style={{ fontSize: 18 }} />
			</DragProject>
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
