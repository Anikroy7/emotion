import MediaCard from "../../Components/Navbar/MediaCard";
import { useGetMediasQuery } from "../../features/auth/api/mediaSlice";
import Loading from "../../utils/Loading";

const Media = () => {
  const { data, isLoading } = useGetMediasQuery();
  if (isLoading) return <Loading />;
  console.log(data.data);

  return (
    <div>
      {data.data.map(({ _id, image, reactions, text, user: { name } }) => {
        console.log(_id);
        return (
          <MediaCard
            key={_id}
            _id={_id}
            image={image}
            reactions={reactions}
            text={text}
            name={name}
          />
        );
      })}
    </div>
  );
};

export default Media;
