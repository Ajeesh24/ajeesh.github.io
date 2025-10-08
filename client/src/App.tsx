import './styles.css';
import resumeData from '../public/resume.json';

type ResumeData = typeof resumeData;

export default function App() {
  const resume = resumeData;

  return (
    <main className="resume">
      <header className="header">
        <h1>{resume.personalInfo.name}</h1>
        <h2>{resume.personalInfo.title}</h2>
        <div className="contact">
          <a href={`mailto:${resume.personalInfo.email}`}>{resume.personalInfo.email}</a>
          <span>{resume.personalInfo.phone}</span>
          <a href={resume.personalInfo.linkedin}>LinkedIn</a>
        </div>
      </header>

      <section className="section">
        <h3>Professional Summary</h3>
        <p>{resume.professionalSummary}</p>
      </section>

      <section className="section">
        <h3>Skills</h3>
        <div className="skills">
          {Object.entries(resume.skills).map(([category, items]) => (
            <div key={category} className="skill-category">
              <h4>{category.replace(/([A-Z])/g, ' $1').trim()}</h4>
              <div className="skill-tags">
                {items.map(skill => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h3>Certifications</h3>
        <div className="certifications">
          {resume.certifications.map((cert, idx) => (
            <div key={idx} className="cert">
              <strong>{cert.title}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h3>Employment History</h3>
        {resume.employmentHistory.map((job, idx) => (
          <div key={idx} className="job">
            <div className="job-header">
              <div>
                <h4>{job.title}</h4>
                <p className="company">{job.company}</p>
              </div>
              <span className="period">{job.period}</span>
            </div>
            <ul className="responsibilities">
              {job.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="section">
        <h3>Education</h3>
        <div className="education">
          <h4>{resume.education.degree}</h4>
          <p>{resume.education.college}</p>
          <p>{resume.education.university} • {resume.education.location}</p>
        </div>
      </section>
    </main>
  );
}
