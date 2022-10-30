import React, { useEffect, useState } from "react";
import Users from "./Components/Users";
import Loader from "./Components/Loader";
import Success from "./Components/Success";

function App() {
  const [users, setUsers] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [invites, setInvites] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data);
      })
      .catch((err) => {
        console.warn(err);
        alert("Ошибка при получении пользователей");
      });
    setIsLoading(false);
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

export default App;

// {IsLoading ? (
//   <Loader />
// ) : (
//   <Users
//     items={users}
//     searchValue={searchValue}
//     onChange={onChangeSearchValue}
//     invites={invites}
//     onClickInvite={onClickInvite}
//   />
// )}
