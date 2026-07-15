import { useState, useCallback } from "react";
import "./SettingsForm.css";

/**
 * Validation rules, exported so tests (and other consumers) can reuse
 * the exact same logic the form uses at submit-time.
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const THEME_OPTIONS = ["light", "dark"];

export function validateSettings({ fullName, email, theme }) {
  const errors = {};

  const trimmedName = (fullName ?? "").trim();
  if (!trimmedName) {
    errors.fullName = "Full name is required.";
  } else if (trimmedName.length < 3) {
    errors.fullName = "Full name must be at least 3 characters.";
  }

  const trimmedEmail = (email ?? "").trim();
  if (!trimmedEmail) {
    errors.email = "Email is required.";
  } else if (!EMAIL_REGEX.test(trimmedEmail)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!theme || !THEME_OPTIONS.includes(theme)) {
    errors.theme = "Please select a theme.";
  }

  return errors;
}

/**
 * SettingsForm
 *
 * A reusable, accessible, controlled settings form (name / email / theme).
 *
 * Props:
 *  - initialValues: { fullName?, email?, theme? } - optional starting values
 *  - onSave: (values) => void - called with validated, trimmed values on submit
 */
export default function SettingsForm({ initialValues = {}, onSave }) {
  const [values, setValues] = useState({
    fullName: initialValues.fullName ?? "",
    email: initialValues.email ?? "",
    theme: initialValues.theme ?? "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | null

  const handleChange = useCallback((field) => (e) => {
    const { value } = e.target;
    setValues((prev) => ({ ...prev, [field]: value }));
    setSubmitStatus(null);
  }, []);

  const handleBlur = useCallback(
    (field) => () => {
      setTouched((prev) => ({ ...prev, [field]: true }));
      setErrors(validateSettings(values));
    },
    [values],
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateSettings(values);
    setErrors(validationErrors);
    setTouched({ fullName: true, email: true, theme: true });

    if (Object.keys(validationErrors).length === 0) {
      const cleanValues = {
        fullName: values.fullName.trim(),
        email: values.email.trim(),
        theme: values.theme,
      };
      setSubmitStatus("success");
      onSave?.(cleanValues);
    } else {
      setSubmitStatus(null);
    }
  };

  const showError = (field) => touched[field] && errors[field];

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="settings-form"
      aria-label="Settings form"
    >
      <div className="settings-field">
        <label htmlFor="settings-fullname">Full Name</label>
        <input
          id="settings-fullname"
          name="fullName"
          type="text"
          value={values.fullName}
          onChange={handleChange("fullName")}
          onBlur={handleBlur("fullName")}
          aria-invalid={Boolean(showError("fullName"))}
          aria-describedby={
            showError("fullName") ? "settings-fullname-error" : undefined
          }
          required
        />
        {showError("fullName") && (
          <p id="settings-fullname-error" className="settings-error" role="alert">
            {errors.fullName}
          </p>
        )}
      </div>

      <div className="settings-field">
        <label htmlFor="settings-email">Email</label>
        <input
          id="settings-email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange("email")}
          onBlur={handleBlur("email")}
          aria-invalid={Boolean(showError("email"))}
          aria-describedby={
            showError("email") ? "settings-email-error" : undefined
          }
          required
        />
        {showError("email") && (
          <p id="settings-email-error" className="settings-error" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      <div className="settings-field">
        <label htmlFor="settings-theme">Theme</label>
        <select
          id="settings-theme"
          name="theme"
          value={values.theme}
          onChange={handleChange("theme")}
          onBlur={handleBlur("theme")}
          aria-invalid={Boolean(showError("theme"))}
          aria-describedby={
            showError("theme") ? "settings-theme-error" : undefined
          }
          required
        >
          <option value="">Select a theme</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
        {showError("theme") && (
          <p id="settings-theme-error" className="settings-error" role="alert">
            {errors.theme}
          </p>
        )}
      </div>

      <button type="submit" className="settings-submit">
        Save Settings
      </button>

      {submitStatus === "success" && (
        <p className="settings-success" role="status">
          Settings saved successfully.
        </p>
      )}
    </form>
  );
}
