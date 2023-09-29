import "../styles/PersonalInfo.css";

export default function PersonalInfo({
  fullName = "Bruce Wayne",
  email = "yourEmail@gmail.com",
  phoneNumber = "123-456-7890",
}) {
  return (
    <form className="personal-info">
      <div className="personal-info-header">
        <h2>Personal Info</h2>
      </div>
      <input
        type="text"
        id="fullName"
        name="fullName"
        placeholder={fullName}
        required
      />
      <input
        type="email"
        id="email"
        name="email"
        placeholder={email}
        required
      />

      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder={phoneNumber}
        required
      />
    </form>
  );
}
