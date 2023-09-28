import { useState } from "react";
import "../styles/App.css";
import CVForm from "./CVForm";
import PersonalInfo from "./PersonalInfo";

export default function App() {
  return (
    <div className="app">
      <PersonalInfo />
      <CVForm />
    </div>
  );
}
