import { useLoaderData } from "react-router-dom";
export const EachUsers = () => {
  const data = useLoaderData();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const pass = form.get("pass");
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
