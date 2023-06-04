/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createUser, updateUserName } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useCreateUserMutation } from "../../features/auth/api/userApi";
import Loading from "../../utils/Loading";

const Signup = () => {
  const [name, setName] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const dispatch = useDispatch();
  const [postUser, { data, isLoading }] = useCreateUserMutation();
  const {
    auth: { email: loginEmail, loading, error, errorMsg },
  } = useSelector((state) => state);
  const navigate = useNavigate();
  console.log("user data", data);
  useEffect(() => {
    dispatch(updateUserName({ name }));

    if (loginEmail) {
      postUser({
        name,
        email: loginEmail,
      });
      if (data) {
        navigate("/");
      }
    }
  }, [loginEmail, dispatch, name, navigate, data]);

  if (isLoading) return <Loading />;
  const onSubmit = ({ name, email, password }) => {
    // console.log(data);
    setName(name);
    dispatch(createUser({ email, password }));
  };

  return (
    <section>
      <h3 className="text-center font-bold text-xl">Signup</h3>
      <div className="flex justify-center items-center">
        <form className="w-full max-w-sm" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.name ? "border-red-500" : ""
              }`}
              id="name"
              type="text"
              placeholder="Enter your name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-xs italic">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.email ? "border-red-500" : ""
              }`}
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: emailRegex,
                  message: "Please enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.password ? "border-red-500" : ""
              }`}
              id="password"
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <input
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              value={`${loading ? "Loading..." : "Signup"}`}
            />
          </div>
        </form>
      </div>
      <div>
        {error ? (
          <div className="text-center py-3 text-red-600">
            <span>{errorMsg}</span>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default Signup;
