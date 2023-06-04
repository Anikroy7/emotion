import { useState } from "react";

const MediaForm = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform upload and submission logic here
    // For example, you can make an API request to save the text and image data

    // Reset form state
    setText("");
    setImage(null);
  };

  return (
    <section className="p-4">
      <h2 className="font-bold text-2xl py-6">Post your feelings</h2>
      <div className="max-w-md mx-auto shadow-lg p-3">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="text"
            >
              Text
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="text"
              rows="3"
              placeholder="Enter your text"
              value={text}
              onChange={handleTextChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="image"
            >
              Image
            </label>
            <input
              className="hidden"
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            <label
              className="cursor-pointer bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              htmlFor="image"
            >
              {image ? "Image Selected" : "Upload Image"}
            </label>
            {image && <p className="text-sm text-gray-600">{image.name}</p>}
          </div>
          <div className="flex items-center justify-end">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default MediaForm;
