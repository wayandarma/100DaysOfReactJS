import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useSelector } from "react-redux";
function Navbar() {
  const username = useSelector((state) => state.user.user.username);
  return (
    <div className="container max-w-7xl flex items-center gap-4 my-10 border-4 border-purple-400 bg-blue-500 justify-around">
      <div>
        <Link to={"/"}>
          <FaHome className="text-white" />
        </Link>
      </div>

      <div>
        <Link
          to={"/day-10"}
          className="px-4 py-2 transition-all ease-in-out duration-300 font-bold uppercase hover:bg-purple-600 text-white "
        >
          Day 10
        </Link>
      </div>
      <div>
        <span>{username}</span>
      </div>
    </div>
  );
}

export default Navbar;
