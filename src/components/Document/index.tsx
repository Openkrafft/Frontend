import React from 'react'
import { Document as PageContainer } from './Document.styles'
import {
	LinkedinOutlined,
	GithubOutlined,
	TwitterOutlined,
	MailOutlined,
	EnvironmentOutlined,
	SkypeOutlined,
	PhoneOutlined
} from '@ant-design/icons'

const Canvas: React.FC = () => {
	return (
		<PageContainer id='resume-content'>
			<div id='cv-header'>
				<div id='user-info'>
					<p id='name' style={{ fontSize: 35, margin: 0 }}>
						Mohamed Ali Ben Othmen
					</p>
					<p id='title' style={{ fontSize: 25, color: '#2d3436', marginBottom: 15, marginTop: 0 }}>
						Software Engineer
					</p>
					<p id='summary' style={{ fontSize: 14 }}>
						Enthusiastic software engineer with 3+ years experience participating in the complete product development
						lifecycle of successfully launched applications. Proficient in an assortment of technologies, including
						JavaScript, TypeScript, React, Node.js, and PostgreSQL.
					</p>
				</div>
				<div
					id='social-media'
					style={{
						background: '#192a56',
						marginTop: 20,
						display: 'flex',
						flexWrap: 'wrap',
						padding: '13px 5px 0px 10px'
					}}>
					<div id='linkedin' style={{ color: 'white', display: 'flex', marginRight: 25 }}>
						<LinkedinOutlined style={{ fontSize: 17, marginRight: 8 }} />
						<p style={{ fontSize: 12 }}>www.linkedin.com/username</p>
					</div>
					<div id='github' style={{ color: 'white', display: 'flex', marginRight: 25 }}>
						<GithubOutlined style={{ fontSize: 17, marginRight: 8 }} />
						<p style={{ fontSize: 12 }}>www.github.com/username</p>
					</div>
					<div id='email' style={{ color: 'white', display: 'flex', marginRight: 25 }}>
						<MailOutlined style={{ fontSize: 17, marginRight: 8 }} />
						<p style={{ fontSize: 12 }}>username@gmail.com</p>
					</div>
					<div id='twitter' style={{ color: 'white', display: 'flex', marginRight: 25 }}>
						<TwitterOutlined style={{ fontSize: 17, marginRight: 8 }} />
						<p style={{ fontSize: 12 }}>@username</p>
					</div>
					<div id='email' style={{ color: 'white', display: 'flex', marginRight: 25 }}>
						<EnvironmentOutlined style={{ fontSize: 17, marginRight: 8 }} />
						<p style={{ fontSize: 12 }}>Sfax, Tunisia</p>
					</div>
					<div id='email' style={{ color: 'white', display: 'flex', marginRight: 25 }}>
						<SkypeOutlined style={{ fontSize: 17, marginRight: 8 }} />
						<p style={{ fontSize: 12 }}>user.name</p>
					</div>
					<div id='phone' style={{ color: 'white', display: 'flex', marginRight: 25 }}>
						<PhoneOutlined style={{ fontSize: 17, marginRight: 8 }} />
						<p style={{ fontSize: 12 }}>(+216) 20-555-999</p>
					</div>
				</div>
			</div>

			<div id='skills'>
				<p style={{ color: '#192a56', fontSize: 25, marginTop: 15, marginBottom: 10 }}>Skills</p>
				<ul style={{ fontSize: 14 }}>
					<li>
						<span style={{ fontWeight: 600 }}>Programming Languages</span>: JavaScript, TypeScript, Python, Ruby
					</li>
					<li>
						<span style={{ fontWeight: 600 }}>Frontend Technologies</span>: HTML, CSS, SASS, React, Redux
					</li>
					<li>
						<span style={{ fontWeight: 600 }}>Backend Technologies</span>: Node.js, Flask, Ruby on Rails, GraphQL,
						RabbitMQ, Kafka
					</li>
					<li>
						<span style={{ fontWeight: 600 }}>Databases</span>: MySQL, PostgreSQL, MongoDB
					</li>
					<li>
						<span style={{ fontWeight: 600 }}>TDD & BDD</span>: Selenium, Cypress, Puppeteer, Jest, Jasmine.
					</li>
					<li>
						<span style={{ fontWeight: 600 }}>DevOps</span>: Jenkins, Docker, kubernetes
					</li>
				</ul>
			</div>

			<div id='experience'>
				<p style={{ color: '#192a56', fontSize: 25, marginTop: 10, marginBottom: 5 }}>Experience</p>
				<div id='role'>
					<p id='position' style={{ marginBottom: 0, fontSize: 20 }}>
						Senior Frontend Developer
					</p>
					<p id='company-name' style={{ fontSize: 20, marginBottom: 10 }}>
						Apprentus
					</p>
					<p id='date' style={{ color: 'gray' }}>
						<i>01/2020 - Present</i>
					</p>
					<ul id='duties'>
						<li>Designing and implementing new features and functionality for the platform.</li>
						<li>Re-architected major parts of the platform to be more flexible, extensible, and testable</li>
						<li>Converting pages from haml (rails template engine) to scalable React components powered by redux.</li>
						<li>Coordinated with a team of UX designers to create new features for the platform.</li>
						<li>Maintaining, and tuning high-performance code to ensure optimal load time.</li>
					</ul>
				</div>
				<div id='role'>
					<p id='position' style={{ marginBottom: 0, fontSize: 20 }}>
						Full Stack Engineer
					</p>
					<p id='company-name' style={{ fontSize: 20, marginBottom: 10 }}>
						dresslife GmbH
					</p>
					<p id='date' style={{ color: 'gray' }}>
						<i>12/2018 - 12/2019</i>
					</p>
					<ul id='duties'>
						<li>Designing and implementing new features and functionality for the platform.</li>
						<li>Re-architected major parts of the platform to be more flexible, extensible, and testable</li>
						<li>Converting pages from haml (rails template engine) to scalable React components powered by redux.</li>
						<li>Coordinated with a team of UX designers to create new features for the platform.</li>
						<li>Maintaining, and tuning high-performance code to ensure optimal load time.</li>
					</ul>
				</div>
			</div>
		</PageContainer>
	)
}

export default Canvas
