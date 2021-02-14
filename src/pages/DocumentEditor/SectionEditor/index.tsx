import React from 'react'
import { Button, Drawer } from 'antd'
import { useValues, useActions } from 'kea'
import globalLogic from '../../../logic'
import editorLogic from '../logic'
import { Section } from '../types'

import HeaderEditor from './HeaderEditor'
import ContactInfoEditor from './ContactInfoEditor'
import SkillsEditor from './SkillsEditor'
import ExperienceEditor from './ExperienceEditor'
import ProjectEditor from './ProjectsEditor'
import TextEditor from './TextEditor'
import ListEditor from './ListEditor'
import EducationEditor from './EducationEditor'
import { v4 as uuidv4 } from 'uuid'
import './styles.css'
import { capitalizeFirstLetter, extractTextFromUUID } from 'src/utils'

const SectionEditor: React.FC = () => {
	const { toggleDrawer } = useActions(globalLogic)
	const { drawer: { isVisible, section } } = useValues(globalLogic)
	const { sections } = useValues(editorLogic)
	const { addSchool, addRole } = useActions(editorLogic)
	const allSections = [ 'header', ...sections ]
	const sectionName =
		section === 'ALL'
			? 'Edit document'
			: 'Edit ' + /(skills|list|text)/.test(section)
				? capitalizeFirstLetter(extractTextFromUUID(section))
				: section.charAt(0).toUpperCase() + section.slice(1)

	const sectionEditors: any = {
		header: <HeaderEditor />,
		contactInfo: <ContactInfoEditor />,
		experience: <ExperienceEditor />,
		projects: <ProjectEditor />,
		education: <EducationEditor />
	}

	const renderEditAll = (
		<div>
			{allSections.map((section: Section) => {
				const sectionName = /(skills|list|text)/.test(section)
					? capitalizeFirstLetter(extractTextFromUUID(section))
					: section.charAt(0).toUpperCase() + section.slice(1)
				return (
					<section key={section} style={{ marginBottom: 10 }}>
						<h1>Edit {sectionName}</h1>
						{/skills/.test(section) ? (
							<SkillsEditor id={section} />
						) : /list/.test(section) ? (
							<ListEditor id={section} />
						) : /text/.test(section) ? (
							<TextEditor id={section} />
						) : (
							sectionEditors[section]
						)}
					</section>
				)
			})}
		</div>
	)

	return (
		<Drawer
			title={sectionName}
			placement='right'
			onClose={() => toggleDrawer({ isVisible: false, section: sectionName })}
			visible={isVisible}
			footer={
				section === 'education' ? (
					<Button
						type='primary'
						block
						onClick={() =>
							addSchool({
								id: `school-${uuidv4()}`,
								schoolName: '',
								degree: '',
								date: {
									startDate: '',
									endDate: ''
								},
								description: '',
								hideDescription: false
							})}>
						Add School
					</Button>
				) : section === 'experience' ? (
					<Button
						type='primary'
						block
						onClick={() =>
							addRole({
								id: `role-${uuidv4()}`,
								jobTitle: '',
								companyName: '',
								date: {
									startDate: '',
									endDate: ''
								},
								stillWorking: false,
								roleDescription: '<li></li>'
							})}>
						Add Role
					</Button>
				) : null
			}
			width={600}>
			{section === 'ALL' ? (
				renderEditAll
			) : /skills/.test(section) ? (
				<SkillsEditor id={section} />
			) : /list/.test(section) ? (
				<ListEditor id={section} />
			) : /text/.test(section) ? (
				<TextEditor id={section} />
			) : (
				sectionEditors[section]
			)}
		</Drawer>
	)
}

export default SectionEditor
