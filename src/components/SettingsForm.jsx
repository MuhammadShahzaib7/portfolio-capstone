import { useState } from "react";
import { User, Bell, Lock, Palette, Check, Eye, EyeOff } from "lucide-react";

const TABS = [
  { id: "profile", label: "Profile", icon: User },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "security", label: "Security", icon: Lock },
  { id: "preferences", label: "Preferences", icon: Palette },
];

function Toggle({ checked, onChange }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900 ${
        checked ? "bg-slate-900" : "bg-slate-200"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
          checked ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
}

function Field({ label, hint, children }) {
  return (
    <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-3 sm:gap-4 py-4 border-b border-slate-100 last:border-0">
      <div className="sm:col-span-1">
        <label className="text-sm font-medium text-slate-900">{label}</label>
        {hint && <p className="text-xs text-slate-500 mt-0.5">{hint}</p>}
      </div>
      <div className="sm:col-span-2">{children}</div>
    </div>
  );
}

const inputClass =
  "w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition";

export default function SettingsForm() {
  const [activeTab, setActiveTab] = useState("profile");
  const [saved, setSaved] = useState(false);
  const [showPw, setShowPw] = useState(false);

  const [profile, setProfile] = useState({
    name: "Aleeza Black",
    email: "aleeza@example.com",
    role: "Full Stack Developer",
    bio: "Building fast, accessible web apps with React and Node.",
  });

  const [notifications, setNotifications] = useState({
    productUpdates: true,
    security: true,
    marketing: false,
    weeklyDigest: true,
  });

  const [security, setSecurity] = useState({
    currentPassword: "",
    newPassword: "",
    twoFactor: false,
  });

  const [preferences, setPreferences] = useState({
    theme: "system",
    language: "en",
    density: "comfortable",
  });

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-slate-900">Settings</h1>
          <p className="text-sm text-slate-500 mt-1">
            Manage your account, notifications, and preferences.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          {/* Tabs */}
          <div className="flex overflow-x-auto border-b border-slate-200 px-2 sm:px-4">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${
                    active
                      ? "border-slate-900 text-slate-900"
                      : "border-transparent text-slate-500 hover:text-slate-700"
                  }`}
                >
                  <Icon size={16} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          <form onSubmit={handleSave} className="p-6">
            {activeTab === "profile" && (
              <div>
                <Field label="Full name">
                  <input
                    className={inputClass}
                    value={profile.name}
                    onChange={(e) =>
                      setProfile({ ...profile, name: e.target.value })
                    }
                  />
                </Field>
                <Field label="Email" hint="Used for login and notifications">
                  <input
                    type="email"
                    className={inputClass}
                    value={profile.email}
                    onChange={(e) =>
                      setProfile({ ...profile, email: e.target.value })
                    }
                  />
                </Field>
                <Field label="Role">
                  <input
                    className={inputClass}
                    value={profile.role}
                    onChange={(e) =>
                      setProfile({ ...profile, role: e.target.value })
                    }
                  />
                </Field>
                <Field label="Bio" hint="Shown on your public profile">
                  <textarea
                    rows={3}
                    className={inputClass}
                    value={profile.bio}
                    onChange={(e) =>
                      setProfile({ ...profile, bio: e.target.value })
                    }
                  />
                </Field>
              </div>
            )}

            {activeTab === "notifications" && (
              <div>
                <Field label="Product updates" hint="New features and improvements">
                  <Toggle
                    checked={notifications.productUpdates}
                    onChange={(v) =>
                      setNotifications({ ...notifications, productUpdates: v })
                    }
                  />
                </Field>
                <Field label="Security alerts" hint="Login attempts and password changes">
                  <Toggle
                    checked={notifications.security}
                    onChange={(v) =>
                      setNotifications({ ...notifications, security: v })
                    }
                  />
                </Field>
                <Field label="Marketing emails" hint="Offers and announcements">
                  <Toggle
                    checked={notifications.marketing}
                    onChange={(v) =>
                      setNotifications({ ...notifications, marketing: v })
                    }
                  />
                </Field>
                <Field label="Weekly digest" hint="Summary sent every Monday">
                  <Toggle
                    checked={notifications.weeklyDigest}
                    onChange={(v) =>
                      setNotifications({ ...notifications, weeklyDigest: v })
                    }
                  />
                </Field>
              </div>
            )}

            {activeTab === "security" && (
              <div>
                <Field label="Current password">
                  <div className="relative">
                    <input
                      type={showPw ? "text" : "password"}
                      className={inputClass + " pr-10"}
                      value={security.currentPassword}
                      onChange={(e) =>
                        setSecurity({
                          ...security,
                          currentPassword: e.target.value,
                        })
                      }
                    />
                    <button
                      type="button"
                      onClick={() => setShowPw(!showPw)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </Field>
                <Field label="New password" hint="At least 8 characters">
                  <input
                    type="password"
                    className={inputClass}
                    value={security.newPassword}
                    onChange={(e) =>
                      setSecurity({ ...security, newPassword: e.target.value })
                    }
                  />
                </Field>
                <Field
                  label="Two-factor authentication"
                  hint="Require a code at login"
                >
                  <Toggle
                    checked={security.twoFactor}
                    onChange={(v) =>
                      setSecurity({ ...security, twoFactor: v })
                    }
                  />
                </Field>
              </div>
            )}

            {activeTab === "preferences" && (
              <div>
                <Field label="Theme">
                  <select
                    className={inputClass}
                    value={preferences.theme}
                    onChange={(e) =>
                      setPreferences({ ...preferences, theme: e.target.value })
                    }
                  >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="system">System</option>
                  </select>
                </Field>
                <Field label="Language">
                  <select
                    className={inputClass}
                    value={preferences.language}
                    onChange={(e) =>
                      setPreferences({
                        ...preferences,
                        language: e.target.value,
                      })
                    }
                  >
                    <option value="en">English</option>
                    <option value="ur">Urdu</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                  </select>
                </Field>
                <Field label="Layout density">
                  <select
                    className={inputClass}
                    value={preferences.density}
                    onChange={(e) =>
                      setPreferences({
                        ...preferences,
                        density: e.target.value,
                      })
                    }
                  >
                    <option value="comfortable">Comfortable</option>
                    <option value="compact">Compact</option>
                  </select>
                </Field>
              </div>
            )}

            {/* Footer */}
            <div className="flex items-center justify-end gap-3 mt-6 pt-4 border-t border-slate-100">
              {saved && (
                <span className="flex items-center gap-1 text-sm text-emerald-600">
                  <Check size={16} /> Saved
                </span>
              )}
              <button
                type="submit"
                className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900"
              >
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
