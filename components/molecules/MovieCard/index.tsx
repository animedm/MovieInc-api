import { Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { styles } from "./style";
import FavoriteButton from "../../atoms/FavoriteButton";
import { save, getValueFor, deleteItem } from "../../../helpers/storage";
import { endpoints } from "../../../constants";
import { addFavorite } from "../../../store/favorites/thunk";
import { Movie } from "../../../Interfaces/movie.interface";

const MovieCard = (props: Movie) => {
  const { poster_path, title, id, name } = props;

  const [isFavorite, setIsFavorite] = useState(false);
  const { isLoading } = useSelector((state: any) => state.favorites);
  const navigation: any = useNavigation();
  const dispatch: any = useDispatch();

  const checkIsFavorite = () => {
    getValueFor("favorites").then((favorite: any) => {
      let newFavorite: Array<Movie> = JSON.parse(favorite);
      let isFavorite = newFavorite.some((favorite) => {
        return favorite.id === id;
      });

      setIsFavorite(isFavorite);
    });
  };

  const onAddFavorite = (item: any) => {
    getValueFor("favorites")
      .then((favorite: any) => {
        //check if favorite movie array exist in storage
        if (!favorite) {
          save("favorites", JSON.stringify([item]));
          setIsFavorite(true);
        } else {
          // check if is favorite movie
          let newFavorites = Array.from(JSON.parse(favorite));
          let isFavorite = newFavorites.some((favorite: any) => {
            return favorite.id === item.id;
          });

          setIsFavorite(!isFavorite);

          if (isFavorite) {
            //delete favorite movie
            newFavorites = newFavorites.filter(
              (itemFavorite: any) => itemFavorite.id !== item.id
            );
          } else {
            //add favorite movie
            newFavorites.push(item);
          }
          //set favorite movie array in redux
          dispatch(addFavorite(newFavorites));
          save("favorites", JSON.stringify(newFavorites));
        }
      })
      .catch(() => {
        save("favorites", JSON.stringify([item]));
      });
  };

  // update favorite movie page when they add or delete favorite movie
  useEffect(() => {
    checkIsFavorite();
  }, [isLoading, props]);

  return (
    <View style={styles.container}>
      {/*Star button*/}
      <TouchableOpacity
        onPress={() => {
          onAddFavorite(props);
        }}
        style={styles.FavoriteButton}
      >
        <FavoriteButton isFavorite={isFavorite} />
      </TouchableOpacity>
      {/*end Star button*/}
      {/*poster image*/}
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => navigation.navigate("Details", { ...props })}
      >
        <Image
          style={styles.image}
          source={{
            uri: `${endpoints.image}${poster_path}`,
          }}
        />
      </TouchableOpacity>
      {/*end poster image*/}
      {/*movie Title*/}
      <Text style={styles.title}>{title ? title : name}</Text>
      {/*end movie Title*/}
    </View>
  );
};

export default MovieCard;
