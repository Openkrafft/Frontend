export interface IRole {
	roleId: number
	jobTitle: string
	companyName: string
	date: {
		startDate: string
		endDate: string
	}
	roleDescription: string
}

export interface Experience {
	sectionTitle: string
	roles: IRole[]
}

export interface Header {
	name: string
	title: string
	summary: string
}

export type ContactType =
	| 'EMAIL'
	| 'ADDRESS'
	| 'LINKEDIN'
	| 'PHONE'
	| 'GITHUB'
	| 'SKYPE'
	| 'TWITTER'

export type Section =
	| 'header'
	| 'contactInfo'
	| 'skills'
	| 'experience'
	| 'projects'
	| 'interests'
	| 'list'
	| 'text'
	| 'education'

export interface Contact {
	contactType: ContactType
	contactInfo: string
}

export interface School {
	id: number
	schoolName: string
	degree: string
	date: {
		startDate: string
		endDate: string
	}
	description: string
}

export interface Project {
	id: number
	projectName: string
	link?: string
	projectDescription: string
}

export type DocumentSections = {
	(sectionName: Section): string
}

export interface SkillSection {
	skillsTitle: string
	skillsList: string
}

export interface ListSection {
	listTitle: string
	listContent: string
}

export interface ListSections {
	[id: string]: ListSection
}

export interface SkillsSections {
	[id: string]: SkillSection
}
