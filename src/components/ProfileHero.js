import { NavLink } from "react-router-dom";
import { profileURL } from "../utils/api";
import { localStorageKey } from "../utils/constant";
function ProfileHero(props) {
  return (
    <div className="profile-hero">
      <div className="container">
        <img
          src={props.profile.image || "/image/smiley.jpg"}
          alt="profileimg"
          className="profile-img"
          height="200px"
          width="200px"
        />
        <h2>{props.profile.username}</h2>
        {props.profile.username === props.user.username ? (
          <NavLink className="unselected btn" to="/settings">
            <span className="edit-button">Edit Profile</span>
          </NavLink>
        ) : (
          <span
            className="unselected btn"
            onClick={() => doFollow(props.profile.username)}
          >
            <span className="edit-button">Follow</span>
          </span>
        )}
      </div>
    </div>
  );
}

function doFollow(username) {
  let key = localStorage[localStorageKey];
  if (key) {
    fetch(profileURL + `${username}/follow`, {
      method: "GET",
      headers: {
        authorization: `Token ${key}`,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return res.json().then(({ errors }) => {
        return Promise.reject(errors);
      });
    });
  }
}

export default ProfileHero;
