import DefaultEducationData from "./DefaultEducationData";
import "../styles/CVForm.css";

export default function CVForm({ name, email, number, educationSections }) {
  const isEducationEmpty = educationSections.length === 0;

  const renderEducationData = isEducationEmpty
    ? DefaultEducationData
    : educationSections;

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
            <div className="experience-section-preview-info">
              <div className="preview-info-date">
                <p>???-???</p>
                <p>Gotham City, US</p>
              </div>
              <div className="preview-info-degree">
                <p>
                  <strong>Wayne Enterprises, Inc.</strong>
                </p>
                <p>CEO</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  ornare, sapien at dignissim lobortis, lectus lorem commodo
                  risus, non sollicitudin velit urna ut libero.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
