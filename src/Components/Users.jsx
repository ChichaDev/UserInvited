import React from "react";
import UserCard from "./UserCard";
import "./Users.css";
import SearchLogo from "../Components/SearchLogo.png";

const Users = ({
  items,
  searchValue,
  onChange,
  invites,
  onClickInvite,
  onClickSendInvites,
}) => {
  return (
    <div className="UsersBloc">
      <div className="SearchBar">
        <input
          value={searchValue}
          onChange={onChange}
          className="SearchBarInput"
          type="text"
          placeholder="Найти пользователя..."
        ></input>
        <img className="SearchIcon" src={SearchLogo} alt="" />
      </div>
      <div className="UsersPlace">
        {
          items
            .filter((obj) => {
              const fullName = (obj.first_name + obj.last_name).toLowerCase();
              return (
                fullName.includes(searchValue.toLowerCase()) ||
                obj.email.toLowerCase().includes(searchValue.toLowerCase())
              );
            })
            .map((obj) => (
              <UserCard
                isInvited={invites.includes(obj.id)}
                onClickInvite={onClickInvite}
                key={obj.id}
                {...obj}
              />
            )) //спредим все свойтсва obj в компонент
        }
      </div>
      <div>
        {invites.length > 0 && (
          <button onClick={onClickSendInvites} className="InvitedUsersButton">
            Отправить приглашения
          </button>
        )}
      </div>
    </div>
  );
};

export default Users;
