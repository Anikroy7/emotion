import { useSelector } from "react-redux";
import MediaCard from "../../Components/Navbar/MediaCard";
import MediaForm from "../../Components/Navbar/MediaForm";
import { useGetMediasQuery } from "../../features/auth/api/mediaSlice";
import Loading from "../../utils/Loading";
import { useGetUserByEmailQuery } from "../../features/auth/api/userApi";

const Home = () => {
  const { data, isLoading:mediaLoading } = useGetMediasQuery();
  const { email } = useSelector((state) => state.auth);
  console.log(email);

  const { data:userData, isLoading:userLoading } = useGetUserByEmailQuery({email}, {skip:!email});
  
  //  console.log('data', userData);
  if (userLoading|| mediaLoading) return <Loading />;
  if(userData){
    localStorage.setItem('userId', userData.data._id)
  }
  const sortedData = [...data.data]
    .sort((a, b) => b.reactions - a.reactions)
    .slice(0, 3);
  return (
    <section>
      <div>
        <MediaForm />
      </div>

      {/* Show top 3 media card */}
      <div>
        <h3 className="text-2xl py-3 font-bold">Popular Posts</h3>
        {sortedData.map(({ _id, image, reaction, text }) => (
          <MediaCard
            key={_id}
            _id={_id}
            image={image}
            reaction={reaction}
            text={text}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;
