import MediaCard from "../../Components/Navbar/MediaCard";
import MediaForm from "../../Components/Navbar/MediaForm";
import { useGetMediasQuery } from "../../features/auth/api/mediaSlice";
import Loading from "../../utils/Loading";

const Home = () => {
  const { data, isLoading } = useGetMediasQuery();

  if (isLoading) return <Loading />;
  console.log(data.data);
  const sortedData = [...data.data]
    .sort((a, b) => b.reactions - a.reactions)
    .slice(0, 3);
  console.log(sortedData);
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
