import React, { useState } from "react";
import "../styles/Settings.css"; // Import CSS

const Settings = () => {
  // State for different settings
  const [darkMode, setDarkMode] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(false);
  const [privacyMode, setPrivacyMode] = useState(true);

  return (
    <div className={`settings-page ${darkMode ? "dark-mode" : ""}`}>
      <h1>Settings</h1>

      {/* General Settings */}
      <div className="section">
        <h2>General Settings</h2>
        <p>Customize your experience.</p>
        <div className="setting-item">
          <p>Dark Mode</p>
          <label className="toggle-switch">
            <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
            <span className="slider"></span>
          </label>
        </div>
      </div>
      <hr />

      {/* Privacy Settings */}
      <div className="section">
        <h2>Privacy & Security</h2>
        <p>Control your data and privacy preferences.</p>
        <div className="setting-item">
          <p>Privacy Mode</p>
          <label className="toggle-switch">
            <input type="checkbox" checked={privacyMode} onChange={() => setPrivacyMode(!privacyMode)} />
            <span className="slider"></span>
          </label>
        </div>
      </div>
      <hr />

      {/* Notification Settings */}
      <div className="section">
        <h2>Notification Preferences</h2>
        <p>Manage how we notify you.</p>
        <div className="setting-item">
          <p>Push Notifications</p>
          <label className="toggle-switch">
            <input type="checkbox" checked={pushNotifications} onChange={() => setPushNotifications(!pushNotifications)} />
            <span className="slider"></span>
          </label>
        </div>
        <div className="setting-item">
          <p>Email Notifications</p>
          <label className="toggle-switch">
            <input type="checkbox" checked={emailAlerts} onChange={() => setEmailAlerts(!emailAlerts)} />
            <span className="slider"></span>
          </label>
        </div>
        <div className="setting-item">
          <p>SMS Alerts</p>
          <label className="toggle-switch">
            <input type="checkbox" checked={smsAlerts} onChange={() => setSmsAlerts(!smsAlerts)} />
            <span className="slider"></span>
          </label>
        </div>
      </div>
      <hr />

      {/* Browse Us Section */}
      <div className="section">
        <h2>Explore More</h2>
        <p>Discover our latest features.</p>
        <div className="help-section">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="help-item">Visit Our Website</a>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="help-item">Latest Announcements</a>
        </div>
      </div>
      <hr />

      {/* Contact Section */}
      <div className="section">
        <h2>Contact Us</h2>
        <p>Need help? Reach out to us.</p>
        <div className="help-section">
          <a href="mailto:support@example.com" className="help-item">Email Support</a>
          <p className="help-item">Call Us: +1 (123) 456-7890</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
