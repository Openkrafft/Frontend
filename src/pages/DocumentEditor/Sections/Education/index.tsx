import React from 'react'
import { useValues, useActions } from 'kea'
import editorLogic from '../../logic'
import Section from '../SectionWrapper'
import School from './School'
import { v4 as uuidv4 } from 'uuid'
import { School as SchoolType } from '../../types'
import globalLogic from 'src/logic'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

interface EducationProps {
	dragSectionProps: any
}

const Education: React.FC<EducationProps> = ({ dragSectionProps }) => {
	const { toggleDrawer } = useActions(globalLogic)
	const { education: { educationTitle, schools } } = useValues(editorLogic)
	const { addSchool, updateEducationTitle, deleteSection, swapSchools } = useActions(
		editorLogic
	)
	const newSchool: SchoolType = {
		id: `school-${uuidv4()}`,
		schoolName: '',
		degree: '',
		date: {
			startDate: '',
			endDate: ''
		},
		description: '',
		hideDescription: false
	}

	return (
		<Section
			showSectionTitle
			showAddButton
			sectionTitle={educationTitle}
			onDragProps={dragSectionProps}
			onChange={(e) => updateEducationTitle(e.target.value)}
			onDeleteClick={() => deleteSection('education')}
			onAddClick={() => addSchool(newSchool)}
			onEditClick={() => toggleDrawer({ isVisible: true, section: 'education' })}>
			<DragDropContext
				onDragEnd={(param, _) => {
					const srcIndex = param.source.index
					const destinationIndex = param.destination?.index
					swapSchools(srcIndex, destinationIndex)
				}}>
				<Droppable droppableId={`droppable-education-section`}>
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
							{Object.values(schools).map((school: any, i) => (
								<Draggable
									key={school.id}
									draggableId={`draggable-school-${school.id}`}
									index={i}>
									{(provided, snapshot) => (
										<div ref={provided.innerRef} {...provided.draggableProps}>
											<School
												{...school}
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

export default Education
