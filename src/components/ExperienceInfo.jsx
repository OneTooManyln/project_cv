import "../styles/ExperienceInfo.css";

export default function ExperienceInfo() {
  return (
    <form className="experience-info">
      <div className="experience-info-header">
        <h2>Experience Info</h2>
      </div>
      <input
        type="text"
        id="company-name"
        name="company-name"
        placeholder="Company Name"
      />
      <input type="text" id="Position" name="Position" placeholder="Position" />
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
