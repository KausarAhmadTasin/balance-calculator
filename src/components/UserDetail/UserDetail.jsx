import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import "./UserDetail.css";

export const UserDetail = () => {
  const {
    id,
    name,
    username,
    email,
    address: { street, city },
    company: { name: compName },
    phone,
    website,
  } = useLoaderData();
  // console.log(street);
  return (
    <>
      <p>
        <b>User Id:</b> {id}
      </p>
      <h2>
        <b>Name:</b> {name}
      </h2>
      <p>
        <b>User Name:</b> {username}
      </p>
      <p>
        <b>Email:</b> {email}
      </p>
      <p>
        <b>Address: </b>
        {`${street}, ${city}`}
      </p>
      <p>
        <b>Company:</b> {compName}
      </p>
      <p>
        <b>Phone:</b> {phone}
      </p>
      <p>
        <b>Website:</b> {website}
      </p>
    </>
  );
};
