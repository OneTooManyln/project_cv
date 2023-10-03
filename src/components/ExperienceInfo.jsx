import { useState } from "react";
import "../styles/ExperienceInfo.css";

export default function ExperienceInfo() {
  const [isExperienceFormVisible, setIsExperienceFormVisible] = useState(false);
  const [isAddButtonVisible, setIsAddButtonVisible] = useState(true);

  const handleAddExperience = () => {
    setIsExperienceFormVisible(true);
    setIsAddButtonVisible(false);
  };

  const handleCancel = () => {
    setIsExperienceFormVisible(false);
    setIsAddButtonVisible(true);
  };

  return (
    <>
      <div className="experience-info-container">
        <div className="experience-info-header">
          <h2>Experience Info</h2>
        </div>
        {isExperienceFormVisible && (
          <form className="experience-info" autoComplete="off">
            <div className="inputs-container">
              <input
                type="text"
                id="company-name"
                name="company-name"
                placeholder="Company Name"
              />
              <input
                type="text"
                id="Position"
                name="Position"
                placeholder="Position"
              />
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
              <button className="cancel-btn" onClick={handleCancel}>
                Cancel
              </button>
              <button className="save-btn" type="submit">
                Save
              </button>
            </div>
          </form>
        )}
        {isAddButtonVisible && (
          <div className="experience-info-add-new-btn-container">
            <button className="add-new-btn" onClick={handleAddExperience}>
              <p>+ Add New</p>
            </button>
          </div>
        )}
      </div>
    </>
  );
}
