import React from 'react'
import { useValues, useActions } from 'kea'
import editorLogic from '../../logic'
import Section from '../SectionWrapper'
import Role from './Role'
import { v4 as uuidv4 } from 'uuid'
import globalLogic from 'src/logic'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

interface ExperienceProps {
	dragSectionProps: any
}

const Experience: React.FC<ExperienceProps> = ({ dragSectionProps }) => {
	const { toggleDrawer } = useActions(globalLogic)
	const { experience: { roles, experienceTitle } } = useValues(editorLogic)
	const { addRole, updateExperienceTitle, deleteSection, swapRoles } = useActions(
		editorLogic
	)

	const newRole = {
		id: `role-${uuidv4()}`,
		jobTitle: '',
		companyName: '',
		date: {
			startDate: '',
			endDate: ''
		},
		roleDescription: '<li></li>'
	}

	return (
		<Section
			showSectionTitle
			showAddButton
			sectionTitle={experienceTitle}
			onDragProps={dragSectionProps}
			onChange={(e) => updateExperienceTitle(e.target.value)}
			onAddClick={() => addRole(newRole)}
			onDeleteClick={() => deleteSection('experience')}
			onEditClick={() => toggleDrawer({ isVisible: true, section: 'experience' })}>
			<DragDropContext
				onDragEnd={(param, _) => {
					const srcIndex = param.source.index
					const destinationIndex = param.destination?.index
					swapRoles(srcIndex, destinationIndex)
				}}>
				<Droppable droppableId={`droppable-experience-section`}>
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
							{Object.values(roles).map((role: any, i) => (
								<Draggable
									key={role.id}
									draggableId={`draggable-role-${role.id}`}
									index={i}>
									{(provided, snapshot) => (
										<div ref={provided.innerRef} {...provided.draggableProps}>
											<Role
												{...role}
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

export default Experience
