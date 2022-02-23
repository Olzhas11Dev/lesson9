import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";

function User() {
  const [userName, setUserName] = React.useState("");
  const dispatch = useDispatch();
  const userSelect = useSelector((state) => state.userRed.users);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    Axios.get("http://localhost:7000/users").then((res) =>
      dispatch({ type: "GET_USERS", payload: res.data }),
    );
  };

  const addUser = () => {
    let obj = {
      id: Date.now(),
      name: userName,
    };

    if (!userName) {
      alert("empty");
    } else {
      Axios.post("http://localhost:7000/users", obj).then(() => fetchData());
      // dispatch({ type: "ADD_USER", payload: obj });
    }
    setUserName("");
  };

  const removeUser = (elem) => {
    Axios.delete(`http://localhost:7000/users/${elem.id}`).then(() => fetchData());
    // const newArray = userSelect.filter((item) => item.id !== elem.id);
    // dispatch({ type: "REMOVE_USER", payload: newArray });
  };

  return (
    <div>
      <input type="text" onChange={(e) => setUserName(e.target.value)} value={userName} />
      <button onClick={addUser}>addUser</button>
      {userSelect.map((e) => (
        <div key={e.id}>
          {e.name} <button onClick={() => removeUser(e)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default User;
