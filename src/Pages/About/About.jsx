import { useSelector } from "react-redux";
import { useGetUserByEmailQuery, useUpdateUserMutation } from "../../features/auth/api/userApi";
import Loading from "../../utils/Loading";
import { useState } from "react";
import { useForm } from "react-hook-form";

const About = () => {
  const { email } = useSelector((state) => state.auth);
  const [edit, setEdit] = useState(false);
  const [newaddress, setAddress] = useState("");
  const [nuniversity, setNUniversity] = useState("");
  const [newName, setNewName]= useState('')
  const { data, isLoading } = useGetUserByEmailQuery({ email });
  const [updateUser, {data:updatedData,isLoading:updatedLoading}]= useUpdateUserMutation()
  if (isLoading||updatedLoading) return <Loading />;
  console.log("data", updatedData);
  const { name, address, university } = data.data;

  const handleUpdate = () => {
    console.log(nuniversity);
    if (!nuniversity || !newaddress || !newName) {
      alert("Please provide every fields");
      return;
    }
    updateUser({email, name:newName, address:  newaddress, university: nuniversity})
  };

  return (
    <section>
      <div>
        <div className="bg-gray-100 py-8 text-right px-4">
          {edit && (
            <>
              <button
                onClick={() => setEdit(false)}
                class="btn btn-sm btn-neutral mr-4"
              >
                Cancel
              </button>
              <button onClick={handleUpdate} class="btn btn-sm btn-accent mr-4">
                Save
              </button>
            </>
          )}
          <button onClick={() => setEdit(true)} class="btn btn-sm btn-success">
            Edit
          </button>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <div className="flex flex-col sm:flex-row">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4 sm:mr-4 sm:w-1/2">
              <h2 className="text-xl font-bold mb-2">User Information</h2>
              <div className="mb-4">
                <span className="font-semibold">Name: </span>
                {edit ? (
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-md w-full max-w-xs"
                    defaultValue={name}
                    onChange={(e) => setNewName(e.target.value)}
                  />
                ) : (
                  <span>{name}</span>
                )}
              </div>
              <div className="mb-4">
                <span className="font-semibold">Email: </span>

                <span>{email}</span>
              </div>
              <div className="mb-4">
                <span className="font-semibold">Location: </span>
                {edit ? (
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-md w-full max-w-xs"
                    defaultValue={address || ""}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                ) : (
                  <span>{address || ""}</span>
                )}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-4 sm:ml-4 sm:w-1/2">
              <h2 className="text-xl font-bold mb-2">About University</h2>
              {edit ? (
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-md w-full max-w-xs"
                  defaultValue={university || ""}
                  onChange={(e) => setNUniversity(e.target.value)}
                />
              ) : (
                <span>{university || ""}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
