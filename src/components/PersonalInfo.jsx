import "../styles/PersonalInfo.css";

export default function PersonalInfo({
  fullName = "Bruce Wayne",
  email = "yourEmail@gmail.com",
  phoneNumber = "123-456-7890",
  onNameChange,
  onEmailChange,
  onNumberChange,
}) {
  const handleNameChange = (e) => {
    onNameChange(e.target.value);
  };

  const handleEmailChange = (e) => {
    onEmailChange(e.target.value);
  };

  const handleNumberChange = (e) => {
    onNumberChange(e.target.value);
  };

  return (
    <form className="personal-info" autocomplete="off">
      <div className="personal-info-header">
        <h2>Personal Info</h2>
      </div>
      <input
        type="text"
        id="fullName"
        name="fullName"
        placeholder={`First / Last name (Ex. ${fullName})`}
        onChange={handleNameChange}
        required
      />
      <input
        type="email"
        id="email"
        name="email"
        placeholder={`Enter email (Ex. ${email})`}
        onChange={handleEmailChange}
        required
      />

      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder={`Enter Phone number (Ex. ${phoneNumber})`}
        onChange={handleNumberChange}
        required
      />
    </form>
  );
}
