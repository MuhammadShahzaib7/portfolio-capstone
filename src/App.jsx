import { useState } from "react";
import SettingsForm from "./components/SettingsForm.jsx";
import "./App.css";

export default function App() {
  const [savedSettings, setSavedSettings] = useState(null);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Portfolio Capstone</h1>
        <p>Personal portfolio website — settings and configuration</p>
      </header>

      <main className="app-main">
        <SettingsForm
          initialValues={savedSettings ?? {}}
          onSave={setSavedSettings}
        />
      </main>
    </div>
  );
}
