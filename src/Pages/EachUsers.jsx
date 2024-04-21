import { useLoaderData } from "react-router-dom";
export const EachUsers = () => {
  const data = useLoaderData();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const pass = form.get("pass");

    fetch(`http://localhost:5000/users/${data._id}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, pass }),
    })
      .then((res) => res.json())
      .then((d) => console.log(d));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-3" action="">
        <input type="text" name="email" defaultValue={data.email} />
        <br />
        <input type="text" name="pass" defaultValue={data.pass} />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
