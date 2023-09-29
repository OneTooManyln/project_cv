import { useState } from "react";
import "../styles/App.css";
import CVForm from "./CVForm";
import PersonalInfo from "./PersonalInfo";
import EduactionInfo from "./EducationInfo";

export default function App() {
  return (
    <div className="app">
      <div className="form-inputs">
        <PersonalInfo />
        <EduactionInfo />
      </div>

      <CVForm />
    </div>
  );
}
