import { useState } from "react";
import "../styles/EducationInfo.css";

export default function EduactionInfo({
  onSaveEducation,
  onEditEducation,
  onDeleteEducation,
  educationSections,
}) {
  const [schoolValue, setSchoolValue] = useState("");
  const [degreeValue, setDegreeValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [locationValue, setLocationValue] = useState("");
  const [isEducationFormVisible, setIsEducationFormVisible] = useState(false);
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);
  const [isAddButtonVisible, setIsAddButtonVisible] = useState(true);
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedSectionIndex, setSelectedSectionIndex] = useState(null);

  const handleAddEducation = () => {
    console.log("Call to handleAdd");
    setIsEducationFormVisible(!isEducationFormVisible);
    setIsAddButtonVisible(!isAddButtonVisible);
  };

  const handleSaveEducation = (event) => {
    console.log("Call to handleSave");
    event.preventDefault();

    const newEducation = {
      school: schoolValue,
      degree: degreeValue,
      date: dateValue,
      location: locationValue,
    };

    if (selectedSection) {
      onEditEducation(selectedSectionIndex, newEducation);
      console.log("Edit form");
    } else {
      onSaveEducation(newEducation);
    }

    setSchoolValue("");
    setDegreeValue("");
    setDateValue("");
    setLocationValue("");

    setSelectedSection(null);
    setSelectedSectionIndex(null);
    setIsEducationFormVisible(false);
    setIsEditFormVisible(false);
    setIsAddButtonVisible(true);
  };

  const handleCancel = () => {
    console.log("Call to handleCancel");
    setSchoolValue("");
    setDegreeValue("");
    setDateValue("");
    setLocationValue("");

    setSelectedSection(null);
    setSelectedSectionIndex(null);
    setIsEducationFormVisible(false);
    setIsEditFormVisible(false);
    setIsAddButtonVisible(true);
  };

  const handleEdit = (section, index) => {
    console.log("Call to handleEdit");
    setSelectedSection(section);
    setSelectedSectionIndex(index);
    setIsEducationFormVisible(true);
    setIsEditFormVisible(true);
    setIsAddButtonVisible(false);

    setSchoolValue(section.school);
    setDegreeValue(section.degree);
    setDateValue(section.date);
    setLocationValue(section.location);
  };

  const handleDelete = () => {
    setSchoolValue("");
    setDegreeValue("");
    setDateValue("");
    setLocationValue("");

    setIsEducationFormVisible(false);
    setIsEditFormVisible(false);
    setIsAddButtonVisible(true);
    setSelectedSection(null);
    setSelectedSectionIndex(null);

    onDeleteEducation(selectedSection);
  };

  return (
    <>
      <div className="education-info-container">
        <div className="education-info-header">
          <h2>Education Info</h2>
        </div>
        {isEducationFormVisible && (
          <form
            className="education-info-form"
            onSubmit={handleSaveEducation}
            autocomplete="off"
          >
            <div className="inputs-container">
              <input
                type="text"
                id="school"
                name="school"
                placeholder="School / university"
                value={schoolValue}
                onChange={(e) => setSchoolValue(e.target.value)}
                required
              />
              <input
                type="text"
                id="degree"
                name="degree"
                placeholder="Degree"
                value={degreeValue}
                onChange={(e) => setDegreeValue(e.target.value)}
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
            </div>
            <div className="buttons-container">
              <button className="cancel-btn" onClick={handleCancel}>
                Cancel
              </button>
              <button className="save-btn" type="submit">
                Save
              </button>
              {isEditFormVisible && (
                <div className="delete-btn" onClick={handleDelete}>
                  Delete
                </div>
              )}
            </div>
          </form>
        )}
        {isAddButtonVisible && !isEditFormVisible && (
          <div className="education-info-main">
            {educationSections.length > 0 && (
              <div className="education-info-sections-container">
                {educationSections.map((section, index) => (
                  <div
                    className="section-form"
                    key={index}
                    onClick={() => handleEdit(section, index)}
                  >
                    <h3>{section.school}</h3>
                  </div>
                ))}
              </div>
            )}
            <div className="education-info-add-new-btn-container">
              <button className="add-new-btn" onClick={handleAddEducation}>
                <p>+ Add New</p>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
