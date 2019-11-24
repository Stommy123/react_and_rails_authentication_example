import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Navbar = () => {
  const { currentUser, signOut } = useContext(UserContext);

  return (
    <header>
      <nav>
        <h1>React and Rails Auth Example</h1>
        {currentUser && (
          <ul>
            <li>
              <img
                src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/nodestradamus.png"
                alt="profile-pic"
                id="nav-profile-pic"
              />
            </li>
            <li>
              <span id="nav-email">{currentUser.email}</span>
            </li>
            <li>
              <button id="sign-out" onClick={signOut}>
                Sign Out
              </button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
