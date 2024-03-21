import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../redux/user/userSlice";
function Form() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(user));
  };

  return (
    <div>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex max-w-4xl container flex-col gap-5"
      >
        <div className="w-full flex flex-col gap-2">
          <label name="username">Username</label>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            placeholder="insert your username"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label name="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            placeholder="insert your email"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label name="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="insert your password"
            onChange={handleChange}
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
