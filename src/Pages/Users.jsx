import React from "react";
import { useLoaderData } from "react-router-dom";

export const Users = () => {
  const data = useLoaderData();
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      Users
      {data.map((el) => (
        <p key={el._id}>
          {el.email}{" "}
          <button onClick={() => handleDelete(el._id)} className="btn">
            X
          </button>
        </p>
      ))}
    </div>
  );
};
