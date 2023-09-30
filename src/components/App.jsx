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
        <EduactionInfo />
        <ExperienceInfo />
      </div>
      <CVForm name={name} email={email} number={number} />
    </div>
  );
}
