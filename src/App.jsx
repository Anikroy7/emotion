import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../firebase.init";
import { useDispatch } from "react-redux";
import { setUser } from "./features/auth/authSlice";

function App() {
  const dispatch= useDispatch()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(setUser(user.email))
    }
  });
  return (

    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
