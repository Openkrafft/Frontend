import { kea } from 'kea'
import {
	IRole,
	Experience,
	Header,
	Contact,
	ContactType,
	Section,
	School,
	Project
} from './types'

const editorLogic = kea({
	actions: {
		addSection: (section: Section) => ({ section }),
		deleteSection: (section: Section) => ({ section }),
		updateHeader: ({ name, title, summary }: Header) => ({
			name,
			title,
			summary
		}),
		addContact: (contact: Contact) => ({ contact }),
		updateContact: (contactInfo: string, contactType: ContactType) => ({
			contactInfo,
			contactType
		}),
		updateSkills: (skillsList: string) => ({ skillsList }),
		updateSkillsTitle: (skillsTitle: string) => ({ skillsTitle }),
		updateList: (list: string) => ({ list }),
		updateListTitle: (listTitle: string) => ({ listTitle }),
		updateTextTitle: (textTitle: string) => ({ textTitle }),
		updateText: (text: string) => ({ text }),
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
		deleteSchool: (id: School) => ({ id }),
		updateExperienceTitle: (experienceTitle: string) => ({ experienceTitle }),
		addRole: (role: IRole) => ({ role }),
		updateSchool: ({
			id,
			schoolName,
			degree,
			date,
			description
		}: {
			id: number
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
			[ 'contactInfo', 'skills', 'list', 'education' ],
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
				addContact: (state: Contact[], contact: Contact) => [ ...state, contact ],
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
		skills: [
			{
				skillsTitle: 'Skills',
				skillsList: '<li></li>'
			},
			{
				updateSkillsTitle: (
					state: { skillsTitle: string; content: string },
					{ skillsTitle }: { skillsTitle: string }
				) => ({ ...state, skillsTitle }),
				updateSkills: (
					state: { skillsTitle: string; skillsList: string },
					{ skillsList }: { skillsList: string }
				) => ({ ...state, skillsList })
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
				schools: [
					{
						id: 6546857654654,
						schoolName: 'Harvard',
						degree: 'Bachelore degree in compouter science',
						date: {
							startDate: '01/2020',
							endDate: '02/2020'
						},
						description: '<li></li>'
					}
				]
			},
			{
				updateEducationTitle: (
					state: { educationTitle: string; schools: School[] },
					{ educationTitle }: { educationTitle: string }
				) => ({ ...state, educationTitle }),
				addSchool: (
					state: { educationTitle: string; schools: School[] },
					{ school }: { school: any }
				) => {
					const updatedSchools = [ ...state.schools, school ]
					return {
						...state,
						schools: updatedSchools
					}
				},
				deleteSchool: (
					state: { educationTitle: string; schools: School[] },
					{ id }: { id: number }
				) => {
					const updatedSchools = state.schools.filter((school) => school.id !== id)
					return {
						...state,
						schools: updatedSchools
					}
				},
				updateSchool: (
					state: { educationTitle: string; schools: School[] },
					{
						id,
						schoolName,
						degree,
						date,
						description
					}: {
						id: number
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
					const updatedSchools = schools.map(
						(school) =>
							school.id === id
								? { ...school, schoolName, degree, date, description }
								: school
					)

					return {
						...state,
						schools: updatedSchools
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
		],
		list: [
			{
				listTitle: 'List',
				list: '<li></li>'
			},
			{
				updateListTitle: (
					state: { listTitle: string; list: string },
					{ listTitle }: { listTitle: string }
				) => ({ ...state, listTitle }),
				updateList: (
					state: { listTitle: string; list: string },
					{ list }: { list: string }
				) => ({ ...state, list })
			}
		],
		textSection: [
			{
				textTitle: 'Text',
				text: ''
			},
			{
				updateTextTitle: (
					state: { textTitle: string; text: string },
					{ textTitle }: { textTitle: string }
				) => ({ ...state, textTitle }),
				updateText: (
					state: { textTitle: string; text: string },
					{ text }: { text: string }
				) => ({ ...state, text })
			}
		]
	}
})

export default editorLogic
