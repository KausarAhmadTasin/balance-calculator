import React from "react";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const {
    id,
    name,
    username,
    email,
    address: { street, city },
    company: { name: conmpName },
    phone,
    website,
  } = user;
  return (
    <>
      <div className="card">
        <h2>Name: {name}</h2>
        <p>
          <b>User Name:</b> {username}
        </p>
        <p>
          <b>Email:</b> {email}
        </p>

        <button className="user-dtl-btn">
          {" "}
          <Link to={`/users/${id}`}>User Details</Link>{" "}
        </button>
      </div>
    </>
  );
};

export default User;
