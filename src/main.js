import './style.css'
import { researchData } from './data/research.js'
import { publications } from './data/publications.js'
import { awards } from './data/awards.js'
import { education } from './data/education.js'
import { researchExperience } from './data/researchExperience.js'
import { contact } from './data/contact.js'
import { technicalSkills } from './data/technicalSkills.js'

document.querySelector('#app').innerHTML = `
  <div class="page">
    <header class="site-header">
      <div class="brand">JHK</div>
      <nav class="nav">
        <a href="#home">Home</a>
        <a href="#research">Research</a>
        <a href="#publications">Publications</a>
        <a href="#awards">Awards</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <main>
      <section id="home" class="hero">
        <div class="hero-layout">
          <div class="hero-photo">
            <img src="/ID%20photo.jpg" alt="Jun Hyuk Kang" />
          </div>
          <div class="hero-text">
            <p class="eyebrow">Curriculum Vitae</p>
            <h1>Jun Hyuk Kang</h1>
            <p class="lead">
              Researcher focused on computational modeling and simulation in energy
              and microelectronics.
            </p>
            <div class="hero-grid">
              <div class="hero-card">
                <h3>Current Research</h3>
                <p>Battery simulation, semiconductor process simulation.</p>
              </div>
              <div class="hero-card">
                <h3>Interests</h3>
                <p>Multi-physics modeling, numerical methods, data-driven workflows.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="research" class="section">
        <div class="section-head research-hero">
          <div>
            <h2>Research</h2>
            <p>Navigate my interests, projects, and methods.</p>
          </div>
          <div class="hero-actions">
            <span class="pill">Updated ${new Date().getFullYear()}</span>
          </div>
        </div>

        <div class="research-block">
          <h3 class="research-title">Interests</h3>
          <div class="badge-cloud">
            ${researchData.interests.badges.map((badge) => `<span class="badge">${badge}</span>`).join('')}
          </div>
          <p class="tab-summary">${researchData.interests.summary}</p>
        </div>

        <div class="research-block">
          <h3 class="research-title">Research Projects</h3>
          <div class="project-grid">
            ${researchData.projects
              .map(
                (project) => `
                  <article class="card project-card">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="tag-row">
                      ${project.keywords.map((kw) => `<span class="tag">${kw}</span>`).join('')}
                    </div>
                  </article>
                `
              )
              .join('')}
          </div>
        </div>

        <div class="research-block">
          <h3 class="research-title">Methods</h3>
          <div class="method-groups">
            ${Object.entries(researchData.methods)
              .map(
                ([group, items]) => `
                  <div class="method-group">
                    <h3>${group}</h3>
                    <div class="method-cards">
                      ${items.map((item) => `<div class="method-card">${item}</div>`).join('')}
                    </div>
                  </div>
                `
              )
              .join('')}
          </div>
        </div>
      </section>

      <section id="publications" class="section">
        <div class="section-head">
          <h2>Publications</h2>
          <p>
            Full list on Google Scholar:
            <a href="https://scholar.google.com/citations?user=OjnBIKAAAAAJ&hl=ko&authuser=1" target="_blank" rel="noreferrer">
              Profile
            </a>
          </p>
        </div>
        <div class="pub-list" id="pub-list"></div>
      </section>

      <section id="awards" class="section">
        <div class="section-head">
          <h2>Awards</h2>
          <p>Recognition for academic excellence and research achievements.</p>
        </div>
        <div class="award-list" id="award-list"></div>
      </section>

      <section id="resume" class="section">
        <div class="section-head">
          <h2>Resume</h2>
          <p>
            Download PDF:
            <a href="#" aria-disabled="true">Resume.pdf</a>
          </p>
        </div>
        <div class="section-card">
          <div class="section-header">
            <span class="section-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" class="section-icon-svg">
                <path d="M12 3L2 8l10 5 9-4.5V14h2V8L12 3zm-5 9.7V17c0 1.1 2.2 3 5 3s5-1.9 5-3v-4.3L12 15l-5-2.3z"></path>
              </svg>
            </span>
            <h3 class="section-title">Education</h3>
          </div>
          <div class="edu-list" id="edu-list"></div>
        </div>
        <section id="research-experience" class="section-card">
          <div class="section-header">
            <span class="section-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" class="section-icon-svg">
                <path d="M4 4h16v4H4V4zm0 6h16v10H4V10zm3 2v6h10v-6H7z"></path>
              </svg>
            </span>
            <h3 class="section-title">Research Experience</h3>
          </div>
          <div class="timeline">
            <div class="timeline-line" aria-hidden="true"></div>
            <div class="exp-list" id="exp-list"></div>
          </div>
        </section>
        <div class="section-card">
          <div class="section-header">
            <h3 class="section-title">Contact Information</h3>
          </div>
          <div class="contact-list" id="contact-list"></div>
        </div>
        <section id="technical-skills" class="section-card">
          <div class="section-header">
            <span class="section-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" class="section-icon-svg">
                <path d="M8 5 3 12l5 7h3l-5-7 5-7H8zm8 0h-3l5 7-5 7h3l5-7-5-7z"></path>
              </svg>
            </span>
            <h3 class="section-title">Technical Skills</h3>
          </div>
          <div class="skills-list" id="skills-list"></div>
        </section>
        <div class="section-card">
          <div class="section-header">
            <span class="section-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" class="section-icon-svg">
                <path d="M4 5h16v4H4V5zm0 6h10v4H4v-4zm12 0h4v8h-4v-8z"></path>
              </svg>
            </span>
            <h3 class="section-title">Languages</h3>
          </div>
          <p class="section-note">Add language proficiency here.</p>
        </div>
      </section>

      <section id="contact" class="section">
        <div class="contact-page">
          <div class="contact-hero">
            <h2 class="contact-title">Contact</h2>
            <p class="contact-subtitle">${contact.subtitleText}</p>
          </div>
          <div class="contact-grid">
            <div class="contact-card">
              <h3 class="card-title">Get in Touch</h3>
              <div class="info-row">
                <span class="info-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 3.2 8 5 8-5V7l-8 5-8-5v1.2z"></path>
                  </svg>
                </span>
                <div class="info-text">
                  <span class="info-label">Primary Email</span>
                  <a class="info-value" href="mailto:${contact.email}">${contact.email}</a>
                </div>
              </div>
              <div class="info-row">
                <span class="info-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 3.2 8 5 8-5V7l-8 5-8-5v1.2z"></path>
                  </svg>
                </span>
                <div class="info-text">
                  <span class="info-label">Personal Email</span>
                  <a class="info-value" href="mailto:${contact.personalEmail}">${contact.personalEmail}</a>
                </div>
              </div>
              <div class="info-row">
                <span class="info-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 2.5-2.5A2.5 2.5 0 0 1 12 11.5z"></path>
                  </svg>
                </span>
                <div class="info-text">
                  <span class="info-label">Location</span>
                  <span class="info-value">${contact.location}</span>
                </div>
              </div>
              <a class="primary-btn" href="mailto:${contact.email}">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 3.2 8 5 8-5V7l-8 5-8-5v1.2z"></path>
                </svg>
                Send Email
              </a>
            </div>
            <div class="contact-card">
              <h3 class="card-title">Connect Online</h3>
              <p class="platform-desc">
                Find my publications and citation metrics on Google Scholar.
              </p>
              <a class="platform-row" href="${contact.scholarUrl}" target="_blank" rel="noopener noreferrer">
                <span class="platform-left">
                  <span class="platform-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 3L2 8l10 5 9-4.5V14h2V8L12 3zm-5 9.7V17c0 1.1 2.2 3 5 3s5-1.9 5-3v-4.3L12 15l-5-2.3z"></path>
                    </svg>
                  </span>
                  <span class="platform-meta">
                    <span class="platform-name">Google Scholar</span>
                    <span class="platform-person">${contact.scholarName}</span>
                  </span>
                </span>
                <span class="platform-visit">Visit</span>
              </a>
              <p class="contact-note">
                For research collaboration or academic inquiries, please email me. I typically respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <p>© ${new Date().getFullYear()} Jun Hyuk Kang</p>
    </footer>
  </div>
`

const pubList = document.querySelector('#pub-list')
if (pubList) {
  const userIcon = `
    <svg class="pub-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0 2c-4.42 0-8 2-8 4.5V21h16v-2.5C20 16 16.42 14 12 14z"></path>
    </svg>
  `
  const calendarIcon = `
    <svg class="pub-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 2h2v2h6V2h2v2h3v18H4V4h3V2zm13 8H4v10h16V10z"></path>
    </svg>
  `
  const arrowIcon = `
    <svg class="pub-view-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"></path>
      <path d="M5 5h6v2H7v10h10v-4h2v6H5V5z"></path>
    </svg>
  `

  pubList.innerHTML = publications
    .map((pub) => {
      const status = pub.status || 'Published'
      const type = pub.type || 'Journal'
      const year = pub.year
        ? `<span class="pub-meta-item">${calendarIcon}<span>${pub.year}</span></span>`
        : ''
      const keywords = (pub.keywords || [])
        .map((keyword) => `<span class="pub-chip">${keyword}</span>`)
        .join('')
      const journalLink = pub.journalUrl
        ? `<a class="pub-journal-link" href="${pub.journalUrl}" target="_blank" rel="noreferrer">${pub.journal}</a>`
        : `<span class="pub-journal-link">${pub.journal || 'Journal'}</span>`

      const isInPrep = status.toLowerCase() === 'in preparation'
      const statusClass = isInPrep ? 'pub-status is-muted' : 'pub-status'
      const viewButton = isInPrep
        ? ''
        : `<a class="pub-view" href="${pub.viewUrl || pub.journalUrl || '#'}" target="_blank" rel="noreferrer">
                View
                ${arrowIcon}
              </a>`

      return `
        <article class="pub-card">
          <div class="pub-top">
            <h3 class="pub-title">${pub.title}</h3>
            <div class="pub-actions">
              <span class="${statusClass}">${status}</span>
              ${viewButton}
            </div>
          </div>
          <div class="pub-meta-line">
            <span class="pub-meta-item">${userIcon}<span class="pub-authors">${pub.authors}</span></span>
            ${year ? `<span class="pub-meta-sep">•</span>${year}` : ''}
          </div>
          <div class="pub-journal-line">
            ${journalLink}
            <span class="pub-type">${type}</span>
          </div>
          <div class="pub-chips">${keywords}</div>
        </article>
      `
    })
    .join('')
}

const awardList = document.querySelector('#award-list')
if (awardList) {
  const icons = {
    star: `
      <svg class="award-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2l2.8 6.1 6.7.6-5 4.4 1.5 6.6-6-3.4-6 3.4 1.5-6.6-5-4.4 6.7-.6L12 2z"></path>
      </svg>
    `,
    trophy: `
      <svg class="award-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 2h10v2h3v3a5 5 0 0 1-5 5h-1a4 4 0 0 1-2 2.8V17h4v3H8v-3h4v-2.2A4 4 0 0 1 10 12h-1a5 5 0 0 1-5-5V4h3V2zm-1 5a3 3 0 0 0 3 3h1V4H6v3zm9 3a3 3 0 0 0 3-3V4h-4v6h1z"></path>
      </svg>
    `
  }

  const pinIcon = `
    <svg class="award-meta-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 2.5-2.5A2.5 2.5 0 0 1 12 11.5z"></path>
    </svg>
  `
  const calendarIcon = `
    <svg class="award-meta-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 2h2v2h6V2h2v2h3v18H4V4h3V2zm13 8H4v10h16V10z"></path>
    </svg>
  `

  awardList.innerHTML = awards
    .map(
      (award) => `
        <article class="award-card">
          <div class="award-left">
            <div class="award-icon">${icons[award.icon] || icons.star}</div>
            <div class="award-body">
              <h3 class="award-title">${award.titleEn}</h3>
              <p class="award-subtitle-ko">${award.subtitleKo}</p>
              <div class="award-meta">
                <span class="award-meta-item">${pinIcon}<span>${award.organizer}</span></span>
                <span class="award-meta-item">${calendarIcon}<span>${award.dateText}</span></span>
              </div>
              <p class="award-desc">${award.descriptionEn}</p>
              <p class="award-details-ko">${award.detailsKo}</p>
            </div>
          </div>
          <div class="award-right">
            <span class="award-badge">${award.category}</span>
          </div>
        </article>
      `
    )
    .join('')
}

const eduList = document.querySelector('#edu-list')
if (eduList) {
  eduList.innerHTML = education
    .map(
      (item) => `
        <article class="edu-item">
          <div class="edu-left">
            <div class="edu-degree">${item.degree}</div>
            <span class="edu-univ">${item.university}</span>
            <div class="edu-location">${item.location}</div>
            ${item.labLine ? `<div class="edu-lab">${item.labLine}</div>` : ''}
            ${
              item.bullets.length
                ? `<ul class="edu-bullets">${item.bullets.map((bullet) => `<li>${bullet}</li>`).join('')}</ul>`
                : ''
            }
          </div>
          <div class="edu-right">
            <span class="edu-pill">${item.dateRange}</span>
          </div>
        </article>
      `
    )
    .join('')
}

const expList = document.querySelector('#exp-list')
if (expList) {
  expList.innerHTML = researchExperience
    .map((exp) => {
      const orgBlock = exp.orgUrl
        ? `<a class="exp-org" href="${exp.orgUrl}" target="_blank" rel="noreferrer">${exp.org}</a>`
        : `<span class="exp-org">${exp.org}</span>`
      const highlights = (exp.highlights || [])
        .map((line) => `<p class="exp-highlight">${line}</p>`)
        .join('')
      const bullets = (exp.bullets || []).length
        ? `<ul class="exp-bullets">${exp.bullets.map((bullet) => `<li>${bullet}</li>`).join('')}</ul>`
        : ''

      return `
        <article class="exp-item">
          <div class="exp-left">
            <div class="exp-header">
              <div>
                <div class="exp-role">${exp.role}</div>
                ${orgBlock}
              </div>
              <span class="exp-pill">${exp.dateRange}</span>
            </div>
            <div class="exp-location">${exp.location}</div>
            <div class="exp-highlights">${highlights}</div>
            ${bullets}
          </div>
        </article>
      `
    })
    .join('')
}

const contactList = document.querySelector('#contact-list')
if (contactList) {
  const mailIcon = `
    <svg class="contact-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 3.2 8 5 8-5V7l-8 5-8-5v1.2z"></path>
    </svg>
  `
  const pinIcon = `
    <svg class="contact-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 2.5-2.5A2.5 2.5 0 0 1 12 11.5z"></path>
    </svg>
  `

  contactList.innerHTML = `
    <div class="contact-item">
      <span class="contact-icon">${mailIcon}</span>
      <div class="contact-text">
        <span class="contact-label">Email</span>
        <a class="contact-value" href="mailto:${contact.email}">${contact.email}</a>
      </div>
    </div>
    <div class="contact-item">
      <span class="contact-icon">${mailIcon}</span>
      <div class="contact-text">
        <span class="contact-label">Personal Email</span>
        <a class="contact-value" href="mailto:${contact.personalEmail}">${contact.personalEmail}</a>
      </div>
    </div>
    <div class="contact-item">
      <span class="contact-icon">${pinIcon}</span>
      <div class="contact-text">
        <span class="contact-label">Location</span>
        <span class="contact-value">${contact.location}</span>
      </div>
    </div>
  `
}

const skillsList = document.querySelector('#skills-list')
if (skillsList) {
  skillsList.innerHTML = technicalSkills
    .map(
      (group) => `
        <div class="skills-group">
          <div class="skills-label">${group.title}</div>
          <div class="skills-chips">
            ${group.items.map((item) => `<span class="chip">${item}</span>`).join('')}
          </div>
        </div>
      `
    )
    .join('')
}

 
