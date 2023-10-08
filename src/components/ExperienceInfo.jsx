import { useState } from "react";
import "../styles/ExperienceInfo.css";

export default function ExperienceInfo({
  onSaveExperience,
  onDeleteExperience,
  onEditExperience,
  experienceSections,
}) {
  const [companyValue, setCompanyValue] = useState("");
  const [positionValue, setPositionValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [locationValue, setLocationValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [isExperienceFormVisible, setIsExperienceFormVisible] = useState(false);
  const [isAddButtonVisible, setIsAddButtonVisible] = useState(true);
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedSectionIndex, setSelectedSectionIndex] = useState(null);

  const handleAddExperience = () => {
    setIsExperienceFormVisible(true);
    setIsAddButtonVisible(false);
  };

  const handleCancel = () => {
    setCompanyValue("");
    setPositionValue("");
    setDateValue("");
    setLocationValue("");
    setDescriptionValue("");

    setSelectedSection(null);
    setSelectedSectionIndex(null);
    setIsExperienceFormVisible(false);
    setIsEditFormVisible(false);
    setIsAddButtonVisible(true);
  };

  const handleSave = (event) => {
    event.preventDefault();

    const newExperience = {
      company: companyValue,
      position: positionValue,
      date: dateValue,
      location: locationValue,
      description: descriptionValue,
    };

    if (selectedSection) {
      onEditExperience(selectedSectionIndex, newExperience);
    } else onSaveExperience(newExperience);

    setCompanyValue("");
    setPositionValue("");
    setDateValue("");
    setLocationValue("");
    setDescriptionValue("");

    setSelectedSection(null);
    setSelectedSectionIndex(null);
    setIsExperienceFormVisible(false);
    setIsEditFormVisible(false);
    setIsAddButtonVisible(true);
  };

  const handleDelete = () => {
    setCompanyValue("");
    setPositionValue("");
    setDateValue("");
    setLocationValue("");
    setDescriptionValue("");

    setIsExperienceFormVisible(false);
    setIsEditFormVisible(false);
    setIsAddButtonVisible(true);
    setSelectedSection(null);
    setSelectedSectionIndex(null);

    onDeleteExperience(selectedSection);
  };

  const handleEdit = (section, index) => {
    setSelectedSection(section);
    setSelectedSectionIndex(index);
    setIsExperienceFormVisible(true);
    setIsEditFormVisible(true);
    setIsAddButtonVisible(false);

    setCompanyValue(section.company);
    setPositionValue(section.position);
    setDateValue(section.date);
    setLocationValue(section.location);
    setDescriptionValue(section.description);
  };

  return (
    <>
      <div className="experience-info-container">
        <div className="experience-info-header">
          <h2>Experience Info</h2>
        </div>
        {isExperienceFormVisible && (
          <form
            className="experience-info"
            autoComplete="off"
            onSubmit={handleSave}
          >
            <div className="inputs-container">
              <input
                type="text"
                id="company-name"
                name="company-name"
                placeholder="Company Name"
                value={companyValue}
                onChange={(e) => setCompanyValue(e.target.value)}
                required
              />
              <input
                type="text"
                id="Position"
                name="Position"
                placeholder="Position"
                value={positionValue}
                onChange={(e) => setPositionValue(e.target.value)}
              />
              <input
                type="text"
                id="date"
                name="date"
                placeholder="Start Date - End Date"
                value={dateValue}
                onChange={(e) => setDateValue(e.target.value)}
                required
              />
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Location"
                value={locationValue}
                onChange={(e) => setLocationValue(e.target.value)}
                required
              />
              <textarea
                type="text"
                id="description"
                name="description"
                placeholder="Description Of Employment"
                value={descriptionValue}
                onChange={(e) => setDescriptionValue(e.target.value)}
              ></textarea>
            </div>
            <div className="buttons-container">
              <button className="cancel-btn" onClick={handleCancel}>
                Cancel
              </button>
              <button className="save-btn" type="submit">
                Save
              </button>
              {isEditFormVisible && (
                <button
                  className="delete-btn"
                  type="submit"
                  onClick={handleDelete}
                >
                  Delete
                </button>
              )}
            </div>
          </form>
        )}
        {isAddButtonVisible && !isEditFormVisible && (
          <div className="experience-info-main">
            {experienceSections.length > 0 && (
              <div className="sections-container">
                {experienceSections.map((section, index) => (
                  <div
                    className="section-form"
                    key={index}
                    onClick={() => handleEdit(section, index)}
                  >
                    <h3>{section.company}</h3>
                  </div>
                ))}
              </div>
            )}
            <div className="experience-info-add-new-btn-container">
              <button className="add-new-btn" onClick={handleAddExperience}>
                <p>+ Add New</p>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
