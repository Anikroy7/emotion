
import { useEffect, useState } from "react";
import { useUpdateMediaMutation } from "../../features/auth/api/mediaSlice";

const MediaCard = ({ image, text, reactions, name, _id }) => {
  const [like, setLike] = useState(false);
  const [updateMedia, { data, isLoading, isSuccess }] =
    useUpdateMediaMutation();
  
const userId = localStorage.getItem('userId');
const isexits= reactions.includes(userId);
console.log(isexits);
// console.log('alreadyLiked', alreadyLiked, userId);
  useEffect(() => {
    if (like) {
      updateMedia({userId: userId , _id});
    }
    if(isexits){
      setLike(true)
    }
  }, [like, isexits, updateMedia, userId]);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mx-auto max-w-md my-5">
      {/* Card content */}
      <div className="flex">
        {/* User avatar */}
        <img
          className="w-12 h-12 rounded-full mr-4"
          src={image}
          alt="User Avatar"
        />
        <div>
          {/* User name */}
          <h2 className="text-lg font-semibold">{name}</h2>
          {/* Timestamp */}
          <p className="text-gray-600">2 hours ago</p>
        </div>
      </div>
      {/* Post content */}
      <p className="text-gray-800 mt-4">{text}</p>
      {/* Like and comment icons */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center">
          <img
            className={`h-6 mt-1 mr-2 ${like && "hidden"}`}
            onClick={() => setLike(true)}
            src="https://icons-for-free.com/iconfiles/png/512/heart-131965017458786724.png"
            alt=""
          />
          <img
            className={`h-6 mt-1 mr-2 ${!like && "hidden"}`}
            onClick={() => setLike(false)}
            src="https://cdn2.vectorstock.com/i/1000x1000/37/36/red-heart-icon-love-icon-vector-23653736.jpg"
            alt=""
          />
          <span className="text-gray-600">{reactions.length} Likes</span>
        </div>
        <div className="flex items-center">
          <span className="text-gray-600">10 Comments</span>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
