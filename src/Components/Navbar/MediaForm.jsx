import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCreateMediaMutation } from "../../features/auth/api/mediaSlice";
import Loading from "../../utils/Loading";
import { useEffect } from "react";

const MediaForm = () => {
  const { email } = useSelector((state) => state.auth);
  const [createMedia, { data, isLoading, isSuccess }] =
    useCreateMediaMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const url = `https://api.imgbb.com/1/upload?expiration=600&key=${
    import.meta.env.VITE_IMGBB_HOSTKEY
  }`;
  useEffect(() => {
    if (isSuccess && data) {
      navigate("/media");
      console.log(data);
    }
  });
  if (isLoading) <Loading />;
  const onSubmit = ({ text, image }) => {
    if (!email) {
      navigate("/login");
      return;
    }
    const userId = localStorage.getItem("userId");
    //host image url
    const formData = new FormData();
    formData.append("image", image[0]);
    // const imageApiKey =;
    console.log(import.meta.env.VITE_IMGBB_HOSTKEY);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        createMedia({
          text: text,
          image: data.data.url,
          user: userId,
        });
      });
  };
  return (
    <section className="p-4">
      <h2 className="font-bold text-2xl py-6">Post your feelings</h2>
      <div className="max-w-md mx-auto shadow-lg p-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="text"
            >
              Text
            </label>
            <textarea
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlinec ${
                errors.text ? "border-red-500" : ""
              }`}
              id="text"
              rows="3"
              placeholder="Enter your text"
              {...register("text", {
                required: "Must be share some fellings with text",
              })}
            />
            {errors.text && (
              <p className="text-red-500 text-xs italic">
                {errors.text.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="image"
            >
              Image
            </label>
            <input
              {...register("image", {
                required: "Must be share an image",
              })}
              accept="image/*"
              type="file"
              className="file-input file-input-bordered file-input-xs w-full max-w-xs"
            />
            {errors.image && (
              <p className="text-red-500 text-xs italic">
                {errors.image.message}
              </p>
            )}
          </div>
          <div className="flex items-center justify-end">
            <input
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              value={"Add Post"}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default MediaForm;
