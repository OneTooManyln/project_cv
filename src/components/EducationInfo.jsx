import "../styles/EducationInfo.css";

export default function EduactionInfo() {
  return (
    <form className="education-info" autocomplete="off">
      <div className="education-info-header">
        <h2>Education Info</h2>
      </div>
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
    </form>
  );
}
