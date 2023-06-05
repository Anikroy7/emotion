import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";
import { signOut } from "firebase/auth";
import auth from "../../../firebase.init";

const Navbar = () => {
  const {
    auth: { email },
  } = useSelector((state) => state);
const dispatch = useDispatch()
  const handleLogout = () => {
    const isConfirm = window.confirm("Are you want to logout sure?")
    if(isConfirm){
      signOut(auth)
      .then(()=>{
        dispatch(logout())
      })
    }
  };

  const navItem = (
    <>
      <li>
        <Link to={'/media'}>Media</Link>
      </li>
      <li>
        <a>Messages</a>
      </li>
      <li>
        <Link to={'/about'}>About</Link>
      </li>
      <>
        {email ? (
          <li>
            <Link onClick={handleLogout}>Logout</Link>
          </li>
        ) : (
          <>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
            <li>
              <Link to={"/signup"}>Signup</Link>
            </li>
          </>
        )}
      </>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>
        <Link to={"/"} className="normal-case text-xl cursor-pointer">
          Emotion
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItem}</ul>
      </div>
    </div>
  );
};

export default Navbar;
