import "../styles/EducationInfo.css";

export default function EduactionInfo() {
  return (
    <>
      <div className="education-info-container">
        <div className="education-info-header">
          <h2>Education Info</h2>
        </div>
        <form className="education-info-form" autocomplete="off">
          <div className="inputs-container">
            <input
              type="text"
              id="school"
              name="school"
              placeholder="School / university"
              required
            />
            <input type="text" id="degree" name="degree" placeholder="Degree" />
            <input
              type="text"
              id="date"
              name="date"
              placeholder="Start Date - End Date"
              required
            />
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Location"
              required
            />
          </div>
          <div className="buttons-container">
            <button className="cancel-btn">Cancel</button>
            <button className="save-btn" type="submit">
              Save
            </button>
          </div>
        </form>
        <div className="education-info-add-new-btn-container">
          <button className="add-new-btn">
            <p>+ Add New</p>
          </button>
        </div>
      </div>
    </>
  );
}
