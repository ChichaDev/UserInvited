import React from "react";
import "./UserCard.css";

const UserCard = ({
  id,
  email,
  avatar,
  first_name,
  last_name,
  onClickInvite,
  isInvited,
}) => {
  return (
    <div className="UserCardBloc">
      <div>
        <img className="UserAvatar" src={avatar} alt=""></img>
      </div>
      <div className="UserInfo">
        <div className="UserNameSurname">
          <b>{first_name} {last_name}</b>
        </div>
        <div className="UserEmail">{email}</div>
      </div>
      <div>
        <button className="UserInvitedButton" onClick={() => onClickInvite(id)}>
          {`${isInvited ? "-" : "+"}`}
        </button>
      </div>
    </div>
  );
};

export default UserCard;
