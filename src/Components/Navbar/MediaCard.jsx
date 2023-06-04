

const MediaCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mx-auto max-w-md my-5">
      {/* Card content */}
      <div className="flex">
        {/* User avatar */}
        <img
          className="w-12 h-12 rounded-full mr-4"
          src="https://www.shutterstock.com/image-vector/default-avatar-profile-icon-vector-260nw-1725655669.jpg"
          alt="User Avatar"
        />
        <div>
          {/* User name */}
          <h2 className="text-lg font-semibold">John Doe</h2>
          {/* Timestamp */}
          <p className="text-gray-600">2 hours ago</p>
        </div>
      </div>
      {/* Post content */}
      <p className="text-gray-800 mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        hendrerit orci nec ipsum consequat, id scelerisque urna sodales. Donec
        auctor dignissim tortor, at tempor quam luctus et.
      </p>
      {/* Like and comment icons */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center">
          <svg
            className="w-6 h-6 mr-2 text-blue-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 22.586l-9-9V8.414l9 9 9-9V13h2V3h-5V1h-4v2H7V1H3v2H2v14h2v5z" />
          </svg>
          <span className="text-gray-600">42 Likes</span>
        </div>
        <div className="flex items-center">
          <svg
            className="w-6 h-6 mr-2 text-blue-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4 9h16v2H4zm0 4h10v2H4z" />
          </svg>
          <span className="text-gray-600">10 Comments</span>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;

