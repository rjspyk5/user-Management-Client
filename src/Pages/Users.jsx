import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

export const Users = () => {
  const datas = useLoaderData();
  const [data, setdata] = useState(datas);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then(() => {
        const update = data.filter((el) => el._id != id);
        setdata(update);
      });
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
          <Link to={`/users/${el._id}`} className="btn">
            View details
          </Link>
        </p>
      ))}
    </div>
  );
};
