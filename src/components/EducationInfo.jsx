import { useState } from "react";
import "../styles/EducationInfo.css";

export default function EduactionInfo({ onSaveEducation }) {
  const [schoolValue, setSchoolValue] = useState("");
  const [degreeValue, setDegreeValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [locationValue, setLocationValue] = useState("");
  const [isEducationFormVisible, setIsEducationFormVisible] = useState(false);
  const [isAddButtonVisible, setIsAddButtonVisible] = useState(true);

  const handleAddEducation = () => {
    setIsEducationFormVisible(!isEducationFormVisible);
    setIsAddButtonVisible(!isAddButtonVisible);
  };

  const handleSaveEducation = (event) => {
    event.preventDefault();

    const newEducation = {
      school: schoolValue,
      degree: degreeValue,
      date: dateValue,
      location: locationValue,
    };

    onSaveEducation(newEducation);

    setSchoolValue("");
    setDegreeValue("");
    setDateValue("");
    setLocationValue("");
  };

  const handleCancel = () => {
    setSchoolValue("");
    setDegreeValue("");
    setDateValue("");
    setLocationValue("");
    setIsEducationFormVisible(false);
    setIsAddButtonVisible(true);
  };

  return (
    <>
      <div className="education-info-container">
        <div className="education-info-header">
          <h2>Education Info</h2>
        </div>
        {isEducationFormVisible && (
          <form className="education-info-form" autocomplete="off">
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
              <button
                className="save-btn"
                type="submit"
                onClick={handleSaveEducation}
              >
                Save
              </button>
            </div>
          </form>
        )}
        {isAddButtonVisible && (
          <div className="education-info-add-new-btn-container">
            <button className="add-new-btn" onClick={handleAddEducation}>
              <p>+ Add New</p>
            </button>
          </div>
        )}
      </div>
    </>
  );
}
