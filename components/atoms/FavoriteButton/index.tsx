import FontAwesome from "@expo/vector-icons/FontAwesome";
const FavoriteButton = ({ isFavorite }: any) => {
  return (
      <FontAwesome
              size={40}
              name="heart"
              color={isFavorite ? '#f00' : '#ccc'}
            />
  );
};
export default FavoriteButton;
