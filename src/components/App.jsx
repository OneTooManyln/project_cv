import { useState } from "react";
import "../styles/App.css";
import CVForm from "./CVForm";
import PersonalInfo from "./PersonalInfo";
import EduactionInfo from "./EducationInfo";
import ExperienceInfo from "./ExperienceInfo";

export default function App() {
  const [name, setName] = useState("Bruce Wayne");
  const [email, setEmail] = useState("yourEmail@gmail.com");
  const [number, setNumber] = useState("123-456-7890");
  const [educationSections, setEducationSections] = useState([]);
  const [experienceSections, setExperienceSections] = useState([]);

  const addEducation = (newEducation) => {
    setEducationSections([...educationSections, newEducation]);
  };

  const addExperience = (newExperience) => {
    setExperienceSections([...experienceSections, newExperience]);
  };

  const editEducation = (index, updatedEducation) => {
    const updatedEducationSections = [...educationSections];
    updatedEducationSections[index] = updatedEducation;
    setEducationSections(updatedEducationSections);
  };

  const deleteEducation = (index) => {
    const updatedEducationSections = [...educationSections];
    updatedEducationSections.splice(index, 1);
    setEducationSections(updatedEducationSections);
  };

  const editExperience = (index, updatedExperience) => {
    const updatedExperienceSections = [...experienceSections];
    updatedExperienceSections[index] = updatedExperience;
    setExperienceSections(updatedExperienceSections);
  };

  const deleteExperience = (index) => {
    const updatedExperienceSections = [...experienceSections];
    updatedExperienceSections.splice(index, 1);
    setExperienceSections(updatedExperienceSections);
  };

  return (
    <div className="app">
      <div className="form-inputs">
        <PersonalInfo
          fullName={name}
          email={email}
          number={number}
          onNameChange={setName}
          onEmailChange={setEmail}
          onNumberChange={setNumber}
        />
        <EduactionInfo
          onSaveEducation={addEducation}
          educationSections={educationSections}
          onEditEducation={editEducation}
          onDeleteEducation={deleteEducation}
        />
        <ExperienceInfo
          onSaveExperience={addExperience}
          experienceSections={experienceSections}
          onEditExperience={editExperience}
          onDeleteExperience={deleteExperience}
        />
      </div>
      <CVForm
        name={name}
        email={email}
        number={number}
        educationSections={educationSections}
        experienceSections={experienceSections}
      />
    </div>
  );
}
