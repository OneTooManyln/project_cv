import "../styles/CVForm.css";

export default function CVForm() {
  return (
    <>
      <div className="CVForm-container">
        <div className="CVForm-header">
          <div className="header-name">
            <h1>Bruce Wayne</h1>
          </div>
          <div className="header-info"></div>
        </div>
        <div className="CVForm-main">
          <div className="CVForm-main-education-section">
            <div className="education-section-header">
              <h2>Education</h2>
            </div>
            <div className="education-section-preview-info">
              <div className="preview-info-date">
                <p>1974-1978</p>
                <p>New Haven, Connecticut</p>
              </div>
              <div className="preview-info-degree">
                <p>
                  {" "}
                  <strong>Yale university at Gotham</strong>{" "}
                </p>
                <p>Law Degree</p>
              </div>
            </div>
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
                  {" "}
                  <strong>Wayne Enterprises, Inc.</strong>{" "}
                </p>
                <p>CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
