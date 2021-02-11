import { kea } from 'kea'
import {
	IRole,
	Experience,
	Header,
	Contact,
	ContactType,
	Section,
	School,
	Project,
	SkillsSections,
	ListSections,
	TextSections,
	EducationSection
} from './types'
import _ from 'lodash'
import { extractTextFromHTML } from '../../utils'

const editorLogic = kea({
	actions: {
		addSection: (section: Section) => ({ section }),
		deleteSection: (section: Section) => ({ section }),
		updateHeader: ({ name, title, summary }: Header) => ({
			name,
			title,
			summary
		}),
		addContact: ({
			contactType,
			contactInfo
		}: {
			contactType: string
			contactInfo: string
		}) => ({ contactType, contactInfo }),
		deleteContact: (contactType: ContactType) => ({ contactType }),
		updateContact: (contactInfo: string, contactType: ContactType) => ({
			contactInfo,
			contactType
		}),
		updateSkills: (skillsList: string, sectionId: string) => ({
			skillsList,
			sectionId
		}),
		addSkillsSection: (sectionId: string) => ({ sectionId }),
		removeSkillsSection: (sectionId: string) => ({ sectionId }),
		addSkills: (skill: string, sectionId: string) => ({ skill, sectionId }),
		removeSkills: (skill: string, sectionId: string) => ({ skill, sectionId }),
		updateSkillsTitle: (skillsTitle: string, sectionId: string) => ({
			skillsTitle,
			sectionId
		}),
		addListSection: (sectionId: string) => ({ sectionId }),
		removeListSection: (sectionId: string) => ({ sectionId }),
		addListContent: (listContent: string, sectionId: string) => ({
			listContent,
			sectionId
		}),
		removeListContent: (listContent: string, sectionId: string) => ({
			listContent,
			sectionId
		}),
		updateList: (listContent: string, sectionId: string) => ({
			listContent,
			sectionId
		}),
		updateListTitle: (listTitle: string, sectionId: string) => ({
			listTitle,
			sectionId
		}),
		addTextSection: (sectionId: string) => ({ sectionId }),
		removeTextSection: (sectionId: string) => ({ sectionId }),
		updateTextTitle: (textTitle: string, sectionId: string) => ({
			textTitle,
			sectionId
		}),
		updateTextContent: (textContent: string, sectionId: string) => ({
			textContent,
			sectionId
		}),
		updateProjectsTitle: (projectsTitle: string) => ({ projectsTitle }),
		addProject: (project: Project) => ({ project }),
		deleteProject: (projectId: number) => ({ projectId }),

		updateProject: ({ id, projectName, link, projectDescription }: Project) => ({
			id,
			projectName,
			link,
			projectDescription
		}),
		updateEducationTitle: (educationTitle: string) => ({ educationTitle }),
		addSchool: (school: School) => ({ school }),
		deleteSchool: (sectionId: School) => ({ sectionId }),
		updateExperienceTitle: (experienceTitle: string) => ({ experienceTitle }),
		addRole: (role: IRole) => ({ role }),
		updateSchool: ({
			id,
			schoolName,
			degree,
			date,
			description
		}: {
			id: string
			schoolName: string
			degree: string
			date: {
				startDate: string
				endDate: string
			}
			description: string
		}) => ({
			id,
			schoolName,
			degree,
			date,
			description
		}),
		deleteRole: (roleId: number) => ({ roleId }),
		updateRole: ({
			id,
			jobTitle,
			companyName,
			date,
			roleDescription
		}: {
			id: number
			jobTitle: string
			companyName: string
			date: {
				startDate: string
				endDate: string
			}
			roleDescription: string
		}) => ({
			id,
			jobTitle,
			companyName,
			date,
			roleDescription
		})
	},

	reducers: {
		sections: [
			[ 'contactInfo' ],
			{
				addSection: (state: Section[], { section }: { section: Section }) => [
					...state,
					section
				],
				deleteSection: (state: Section[], { section }: { section: Section }) =>
					state.filter((currentSection) => currentSection !== section)
			}
		],
		header: [
			{
				name: 'John Doe',
				title: 'Software Engineer',
				summary:
					'Enthusiastic software engineer with 3+ years experience participating in the complete product development.'
			},
			{
				updateHeader: (state: Header, { name, title, summary }: Header) => ({
					...state,
					name,
					title,
					summary
				})
			}
		],
		contacts: [
			[
				{
					contactType: 'EMAIL',
					contactInfo: 'username@gmail.com'
				},
				{
					contactType: 'PHONE',
					contactInfo: '+21624654377'
				},
				{
					contactType: 'ADDRESS',
					contactInfo: 'berlin, germany'
				},
				{
					contactType: 'LINKEDIN',
					contactInfo: 'www.linkedin.com/username'
				},
				{
					contactType: 'GITHUB',
					contactInfo: 'username'
				},
				{
					contactType: 'SKYPE',
					contactInfo: 'user.name'
				}
			],
			{
				addContact: (
					state: Contact[],
					{ contactType, contactInfo }: { contactType: string; contactInfo: string }
				) => [ ...state, { contactType, contactInfo } ],
				deleteContact: (
					state: Contact[],
					{ contactType }: { contactType: ContactType }
				) =>
					state.filter((contact: Contact) => contact.contactType !== contactType),
				updateContact: (
					state: Contact[],
					{
						contactInfo,
						contactType
					}: { contactInfo: string; contactType: ContactType }
				) => {
					return state.map(
						(contact) => (contact.contactType === contactType ? contactInfo : contact)
					)
				}
			}
		],
		list: [
			{},
			{
				addListSection: (
					state: ListSections,
					{ sectionId }: { sectionId: string }
				) => ({
					...state,
					[sectionId]: { listTitle: 'list', listContent: '<li></li>' }
				}),
				removeListSection: (
					state: ListSections,
					{ sectionId }: { sectionId: string }
				) => {
					let updatedState = _.omit(state, sectionId)
					return updatedState
				},
				updateListTitle: (
					state: ListSections,
					{ listTitle, sectionId }: { listTitle: string; sectionId: string }
				) => ({ ...state, [sectionId]: { ...state[sectionId], listTitle } }),
				updateList: (
					state: ListSections,
					{ listContent, sectionId }: { listContent: string; sectionId: string }
				) => ({ ...state, [sectionId]: { ...state[sectionId], listContent } }),
				addListContent: (
					state: ListSections,
					{ listContent, sectionId }: { listContent: string; sectionId: string }
				) => {
					let currentListSection = state[sectionId]
					let currentListContent = extractTextFromHTML(
						currentListSection.listContent
					)

					if (!currentListContent.length) {
						return {
							...state,
							[sectionId]: {
								...state[sectionId],
								listContent: `<li>${listContent}</li>`
							}
						}
					} else {
						return {
							...state,
							[sectionId]: {
								...state[sectionId],
								listContent: `<li>${currentListContent.join(
									'</li><li>'
								)}</li><li>${listContent}</li>`
							}
						}
					}
				},
				removeListContent: (
					state: ListSections,
					{ listContent, sectionId }: { listContent: string; sectionId: number }
				) => {
					let currentListSection = state[sectionId]
					const currentListContent = extractTextFromHTML(
						currentListSection.listContent.replace(listContent, '')
					)
					return {
						...state,
						[sectionId]: {
							...state[sectionId],
							listContent: `<li>${currentListContent.join('</li><li>')}</li>`
						}
					}
				}
			}
		],
		textSection: [
			{},
			{
				addTextSection: (
					state: TextSections,
					{ sectionId }: { sectionId: string }
				) => ({
					...state,
					[sectionId]: { textTitle: 'Text Section', textContent: '' }
				}),
				removeTextSection: (
					state: TextSections,
					{ sectionId }: { sectionId: string }
				) => {
					let updatedState = _.omit(state, sectionId)
					return updatedState
				},
				updateTextTitle: (
					state: TextSections,
					{ textTitle, sectionId }: { textTitle: string; sectionId: number }
				) => ({ ...state, [sectionId]: { ...state[sectionId], textTitle } }),
				updateTextContent: (
					state: TextSections,
					{ textContent, sectionId }: { textContent: string; sectionId: number }
				) => ({ ...state, [sectionId]: { ...state[sectionId], textContent } })
			}
		],
		skills: [
			{},
			{
				addSkillsSection: (
					state: SkillsSections,
					{ sectionId }: { sectionId: string }
				) => ({
					...state,
					[sectionId]: { skillsTitle: 'skills', skillsList: '<li></li>' }
				}),
				removeSkillsSection: (
					state: SkillsSections,
					{ sectionId }: { sectionId: string }
				) => {
					let updatedState = _.omit(state, sectionId)
					return updatedState
				},
				updateSkillsTitle: (
					state: SkillsSections,
					{ skillsTitle, sectionId }: { skillsTitle: string; sectionId: number }
				) => ({ ...state, [sectionId]: { ...state[sectionId], skillsTitle } }),
				updateSkills: (
					state: SkillsSections,
					{ skillsList, sectionId }: { skillsList: string; sectionId: number }
				) => ({ ...state, [sectionId]: { ...state[sectionId], skillsList } }),
				addSkills: (
					state: SkillsSections,
					{ skill, sectionId }: { skill: string; sectionId: number }
				) => {
					let currentSkillsSection = state[sectionId]
					let skills = extractTextFromHTML(currentSkillsSection.skillsList)

					if (!skills.length) {
						return {
							...state,
							[sectionId]: { ...state[sectionId], skillsList: `<li>${skill}</li>` }
						}
					} else {
						return {
							...state,
							[sectionId]: {
								...state[sectionId],
								skillsList: `<li>${skills.join('</li><li>')}</li><li>${skill}</li>`
							}
						}
					}
				},
				removeSkills: (
					state: SkillsSections,
					{ skill, sectionId }: { skill: string; sectionId: number }
				) => {
					let currentSkillsSection = state[sectionId]
					const skills = extractTextFromHTML(
						currentSkillsSection.skillsList.replace(skill, '')
					)
					return {
						...state,
						[sectionId]: {
							...state[sectionId],
							skillsList: `<li>${skills.join('</li><li>')}</li>`
						}
					}
				}
			}
		],
		projects: [
			{
				projectsTitle: 'Projects',
				projects: [
					{
						id: 654687654654,
						projectName: 'MyApp',
						link: 'www.github.com/myapp-repo',
						projectDescription: ''
					}
				]
			},
			{
				updateProjectsTitle: (
					state: { projectsTitle: string; projects: Project[] },
					{ projectsTitle }: { projectsTitle: string }
				) => ({ ...state, projectsTitle }),
				addProject: (
					state: { projectsTitle: string; projects: Project[] },
					{ project }: { project: Project[] }
				) => {
					const updatedProjects = [ ...state.projects, project ]
					return {
						...state,
						projects: updatedProjects
					}
				},
				deleteProject: (
					state: { projectsTitle: string; projects: Project[] },
					{ projectId }: { projectId: number }
				) => {
					const updatedProjects = state.projects.filter(
						(project) => project.id !== projectId
					)
					return {
						...state,
						projects: updatedProjects
					}
				},
				updateProject: (
					state: { projectTitle: string; projects: Project[] },
					{ id, projectName, link, projectDescription }: Project
				) => {
					const { projects } = state
					const updatedProjects = projects.map(
						(project: Project) =>
							project.id === id
								? {
										...project,
										projectName,
										link,
										projectDescription
									}
								: project
					)

					return {
						...state,
						projects: updatedProjects
					}
				}
			}
		],
		education: [
			{
				educationTitle: 'Education',
				schools: {
					'school-619550f3-53a1-439c-929b-cc7131787c6a': {
						id: 'school-619550f3-53a1-439c-929b-cc7131787c6a',
						schoolName: '',
						degree: '',
						date: {
							startDate: 'Start date',
							endDate: 'End date'
						},
						description: ''
					}
				}
			},
			{
				updateEducationTitle: (
					state: EducationSection,
					{ educationTitle }: { educationTitle: string }
				) => ({ ...state, educationTitle }),
				addSchool: (state: EducationSection, { school }: { school: School }) => {
					const updatedSchools = { ...state.schools, [school.id]: school }
					return {
						...state,
						schools: updatedSchools
					}
				},
				deleteSchool: (
					state: EducationSection,
					{ sectionId }: { sectionId: string }
				) => {
					const updatedSchools = _.omit(state.schools, sectionId)
					return {
						...state,
						schools: updatedSchools
					}
				},
				updateSchool: (
					state: EducationSection,
					{
						id,
						schoolName,
						degree,
						date,
						description
					}: {
						id: string
						schoolName: string
						degree: string
						date: {
							startDate: string
							endDate: string
						}
						description: string
					}
				) => {
					const { schools } = state
					const updatedSchool = {
						...schools[id],
						schoolName,
						degree,
						date,
						description
					}

					return {
						...state,
						schools: {
							...schools,
							[id]: updatedSchool
						}
					}
				}
			}
		],
		experience: [
			{
				experienceTitle: 'Work Experience',
				roles: [
					{
						roleId: 654654654,
						jobTitle: 'Pilot',
						companyName: 'Qatar Airways',
						date: {
							startDate: '01/2018',
							endDate: '02/2020'
						},
						roleDescription: '<li></li>'
					},
					{
						roleId: 5611546584,
						jobTitle: 'Lead Engineer',
						companyName: 'Nissan',
						date: {
							startDate: '01/2015',
							endDate: 'Present'
						},
						roleDescription: '<li></li>'
					}
				]
			},
			{
				updateExperienceTitle: (
					state: Experience,
					{ experienceTitle }: { experienceTitle: string }
				) => ({ ...state, experienceTitle }),
				addRole: (state: Experience, { role }: { role: IRole }) => ({
					...state,
					roles: [ ...state.roles, role ]
				}),
				deleteRole: (state: Experience, { roleId }: { roleId: number }) => {
					const updatedRoles = state.roles.filter((role) => role.roleId !== roleId)
					return {
						...state,
						roles: updatedRoles
					}
				},
				updateRole: (
					state: Experience,
					{
						id,
						jobTitle,
						companyName,
						date,
						roleDescription
					}: {
						id: number
						jobTitle: string
						companyName: string
						date: {
							startDate: string
							endDate: string
						}
						roleDescription: string
					}
				) => {
					const { roles } = state
					const updatedRoles = roles.map(
						(role: IRole) =>
							role.roleId === id
								? { ...role, jobTitle, companyName, date, roleDescription }
								: role
					)

					return {
						...state,
						roles: updatedRoles
					}
				}
			}
		]
	}
})

export default editorLogic
