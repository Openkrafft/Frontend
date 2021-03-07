import React from 'react'
import { useValues, useActions } from 'kea'
import globalLogic from '../../../logic'
import editorLogic from '../logic'
import Header from '../../../components/Sections/Header'
import ContactInfo from '../../../components/Sections/ContactInfo'
import Skills from '../../../components/Sections/Skills'
import Experience from '../../../components/Sections/Experience'
import List from '../../../components/Sections/List'
import Text from '../../../components/Sections/Text'
import Education from '../../../components/Sections/Education'
import Projects from '../../../components/Sections/Projects'
import { useResizeDetector } from 'react-resize-detector'
import { Document as PageContainer } from './Document.styles'

import './styles.css'

const Document = () => {
	const { ref: docRef } = useResizeDetector()
	const { zoom } = useValues(globalLogic)
	const { toggleDrawer } = useActions(globalLogic)
	const {
		skills,
		list,
		textSection,
		contacts,
		education,
		experience,
		header,
		sections    : currentSections
	} = useValues(editorLogic)
	const {
		deleteSection,
		addSchool,
		updateEducationTitle,
		swapSchools,
		updateSchool,
		deleteSchool,
		addRole,
		updateExperienceTitle,
		swapRoles,
		updateRole,
		deleteRole,
		addProject,
		updateProjectsTitle,
		swapProjects,
		updateProject,
		deleteProject,
		updateSkills,
		updateSkillsTitle,
		removeSkillsSection,
		updateList,
		updateListTitle,
		removeListSection,
		removeTextSection,
		updateTextTitle,
		updateTextContent,
		updateHeader
	} = useActions(editorLogic)

	const sections = {
		contactInfo : (
			<ContactInfo
				contacts={contacts}
				toggleDrawer={toggleDrawer}
				deleteSection={deleteSection}
			/>
		),
		experience  : (
			<Experience
				toggleDrawer={toggleDrawer}
				experience={experience}
				addRole={addRole}
				updateExperienceTitle={updateExperienceTitle}
				swapRoles={swapRoles}
				updateRole={updateRole}
				deleteRole={deleteRole}
			/>
		),
		education   : (
			<Education
				toggleDrawer={toggleDrawer}
				education={education}
				addSchool={addSchool}
				deleteSection={deleteSection}
				updateEducationTitle={updateEducationTitle}
				swapSchools={swapSchools}
				updateSchool={updateSchool}
				deleteSchool={deleteSchool}
			/>
		),
		projects    : (
			<Projects
				addProject={addProject}
				updateProjectsTitle={updateProjectsTitle}
				swapProjects={swapProjects}
				updateProject={updateProject}
				deleteProject={deleteProject}
				toggleDrawer={toggleDrawer}
				deleteSection={deleteSection}
			/>
		)
	}

	return (
		<PageContainer id='resume-content' style={{ zoom: `${zoom}%` }} ref={docRef}>
			<Header
				header={header}
				toggleDrawer={toggleDrawer}
				updateHeader={updateHeader}
			/>
			{currentSections.map((section) => (
				<div key={section} style={{ marginBottom: 10 }}>
					{/skills/.test(section) ? (
						<Skills
							id={section}
							skills={skills[section]}
							updateSkills={updateSkills}
							updateSkillsTitle={updateSkillsTitle}
							deleteSection={deleteSection}
							removeSkillsSection={removeSkillsSection}
							toggleDrawer={toggleDrawer}
						/>
					) : /list/.test(section) ? (
						<List
							id={section}
							list={list[section]}
							updateList={updateList}
							updateListTitle={updateListTitle}
							removeListSection={removeListSection}
						/>
					) : /text/.test(section) ? (
						<Text
							id={section}
							textSection={textSection[section]}
							removeTextSection={removeTextSection}
							updateTextTitle={updateTextTitle}
							updateTextContent={updateTextContent}
						/>
					) : (
						sections[section]
					)}
				</div>
			))}
		</PageContainer>
	)
}

export default Document
