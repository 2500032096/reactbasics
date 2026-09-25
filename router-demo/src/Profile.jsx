import { Link } from "react-router-dom";

function Profile() {
  return (
    <div>
      <h1> This is the Profile Page</h1>
      <p>Name: Vishnu</p>
      <p>Email: CherryLucky.com</p>

      <Link to="/dashboard">Back to Dashboard</Link>
    </div>
  );
}

export default Profile;
