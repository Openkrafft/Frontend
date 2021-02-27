import React from 'react'
import { useValues, useActions } from 'kea'
import editorLogic from '../../logic'
import Section from '../SectionWrapper'
import Project from './Project'
import { Project as ProjectType } from '../../types'
import { v4 as uuidv4 } from 'uuid'
import globalLogic from 'src/logic'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const Projects: React.FC = () => {
	const { toggleDrawer } = useActions(globalLogic)
	const { projects: { projects, projectsTitle } } = useValues(editorLogic)
	const { addProject, updateProjectsTitle, deleteSection, swapProjects } = useActions(
		editorLogic
	)

	const newProject: ProjectType = {
		id: `project-${uuidv4()}`,
		projectName: '',
		link: '',
		projectDescription: ''
	}

	return (
		<Section
			showSectionTitle
			showAddButton
			sectionTitle={projectsTitle}
			onChange={(e) => updateProjectsTitle(e.target.value)}
			onDeleteClick={() => deleteSection('projects')}
			onAddClick={() => addProject(newProject)}
			onEditClick={() => toggleDrawer({ isVisible: true, section: 'projects' })}>
			<DragDropContext
				onDragEnd={(param, _) => {
					const srcIndex = param.source.index
					const destinationIndex = param.destination?.index
					swapProjects(srcIndex, destinationIndex)
				}}>
				<Droppable droppableId={`droppable-projects-section`}>
					{(provided, snapshot) => (
						<div
							ref={provided.innerRef}
							style={
								snapshot.isDraggingOver ? (
									{
										backgroundColor: 'rgba(159, 207, 252, 0.1)',
										border: '1px solid rgba(24, 144, 255, .1)',
										transition: '.1s ease-in-out'
									}
								) : (
									{}
								)
							}
							{...provided.droppableProps}>
							{Object.values(projects).map((project: any, i) => (
								<Draggable
									key={project.id}
									draggableId={`draggable-project-${project.id}`}
									index={i}>
									{(provided, snapshot) => (
										<div ref={provided.innerRef} {...provided.draggableProps}>
											<Project
												{...project}
												dragProps={{ ...provided.dragHandleProps }}
												isDragging={snapshot.isDragging}
											/>
										</div>
									)}
								</Draggable>
							))}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>
		</Section>
	)
}

export default Projects
