import React, { useEffect, useState } from "react";
import Users from "../components/users/Users";
import Success from "../components/statusComponents/Success";
import { API_URL } from "../config/api";

function InvitingComponent() {
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [invites, setInvites] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data);
      })
      .catch((err) => {
        console.warn(err);
        alert("Ошибка при получении пользователей");
      });
  }, []);

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id !== id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  };

  const onClickSendInvites = () => {
    setSuccess(true);
  };

  return (
    <div className="App">
      {success ? (
        <Success count={invites.length} />
      ) : (
        <Users
          items={users}
          searchValue={searchValue}
          onChange={onChangeSearchValue}
          invites={invites}
          onClickInvite={onClickInvite}
          onClickSendInvites={onClickSendInvites}
        />
      )}
    </div>
  );
}

export default InvitingComponent;
