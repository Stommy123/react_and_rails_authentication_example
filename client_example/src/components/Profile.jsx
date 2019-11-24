import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Profile = () => {
  const { currentUser } = useContext(UserContext);
  const { name, email, gender, age, phone, occupation } = currentUser;
  return (
    <main id="profile">
      <h1>{name}</h1>
      <img
        src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/nodestradamus.png"
        alt="profile"
        className="profile-pic"
      />
      <table>
        <tbody>
          <tr>
            <td>{email}</td>
          </tr>
          <tr>
            <td>{gender}</td>
          </tr>
          <tr>
            <td>{age}</td>
          </tr>
          <tr>
            <td>{occupation}</td>
          </tr>
          <tr>
            <td>{phone}</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

export default Profile;
