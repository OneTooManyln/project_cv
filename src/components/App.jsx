import { useState } from "react";
import "../styles/App.css";
import CVForm from "./CVForm";
import PersonalInfo from "./PersonalInfo";
import EduactionInfo from "./EducationInfo";
import ExperienceInfo from "./ExperienceInfo";

export default function App() {
  return (
    <div className="app">
      <div className="form-inputs">
        <PersonalInfo />
        <EduactionInfo />
        <ExperienceInfo />
      </div>
      <CVForm />
    </div>
  );
}
