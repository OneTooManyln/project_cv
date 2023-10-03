import DefaultEducationData from "./DefaultEducationData";
import DefaultExperienceData from "./DefaultExperienceData";
import "../styles/CVForm.css";

export default function CVForm({
  name,
  email,
  number,
  educationSections,
  experienceSections,
}) {
  const isEducationEmpty = educationSections.length === 0;
  const isExperienceEmpty = experienceSections.length === 0;

  const renderEducationData = isEducationEmpty
    ? DefaultEducationData
    : educationSections;

  const renderExperienceData = isExperienceEmpty
    ? DefaultExperienceData
    : experienceSections;

  return (
    <>
      <div className="CVForm-container">
        <div className="CVForm-header">
          <div className="header-name">
            <h1>{name}</h1>
          </div>
          <div className="header-info">
            <div className="header-info-email">
              <p>{email}</p>
            </div>
            <div className="header-info-number">
              <p>{number}</p>
            </div>
            <div className="header-info-experience"></div>
          </div>
        </div>
        <div className="CVForm-main">
          <div className="CVForm-main-education-section">
            <div className="education-section-header">
              <h2>Education</h2>
            </div>
            {renderEducationData.map((education, index) => (
              <div key={index} className="education-section-preview-info">
                <div className="preview-info-date">
                  <p>{education.date}</p>
                  <p>{education.location}</p>
                </div>
                <div className="preview-info-degree">
                  <p>
                    <strong>{education.school}</strong>
                  </p>
                  <p>{education.degree}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="CVForm-main-experience-section">
            <div className="experience-section-header">
              <h2>Work Experience</h2>
            </div>
            {renderExperienceData.map((experience, index) => (
              <div key={index} className="experience-section-preview-info">
                <div className="preview-info-date">
                  <p>{experience.date}</p>
                  <p>{experience.location}</p>
                </div>
                <div className="preview-info-degree">
                  <p>
                    <strong>{experience.company}</strong>
                  </p>
                  <p>{experience.position}</p>
                  <p>{experience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
