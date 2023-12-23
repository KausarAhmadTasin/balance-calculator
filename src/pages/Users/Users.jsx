import React from "react";
import { useLoaderData } from "react-router-dom";
import User from "../../components/User/User";
import "./Users.css";

const Users = () => {
  const users = useLoaderData();
  //   console.log(users);
  return (
    <>
      <div>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};

export default Users;
