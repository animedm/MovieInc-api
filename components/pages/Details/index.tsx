import { useEffect, useState, useRef } from "react";
import {Text,View,ActivityIndicator,FlatList,ScrollView} from "react-native";
import MovieCard from "../../molecules/MovieCard";
import MovieCardFooter from "../../atoms/MovieCardFooter";
import RateButtons from "../../molecules/RateButtons";
import { Genre } from "../../../Interfaces/genres.interface";
import { Movie } from "../../../Interfaces/movie.interface";
import { getValueFor } from "../../../helpers/storage";
import { styles } from "./style";
import { useFetchById } from "../../../hooks/useFetchById";
import ActorCard from "../../atoms/ActorsCard";
import { getCast} from "../../../services/getters";


const Details = ({ route }: any) => {
  const {
    id,
    overview,
    title,
    release_date,
    vote_average,
    genre_ids = [],
  }: Movie = route.params;

  const detailsScrollView: any = useRef(null);
  const actorsFlatList: any = useRef(null);


  const [genres, setGenres] = useState(Array<string>);
  const [updateRating, setUpdateRating] = useState(false);


  const { dataById: cast, isLoadingById: isLoadingCast } = useFetchById(getCast,id);
  

  const getGenres = () => {

    setUpdateRating(true);
    //check if genders object exist into storage
    getValueFor("genres").then((response: any) => {
      
      let genres = JSON.parse(response);
      let movieGenres: Array<string> = genre_ids.map((movieGenreId: number) => {
        return genres
          .filter((genre: Genre) => {
            return genre.id === movieGenreId;
          })
          .map((genre: Genre) => genre.name);
      });
      setGenres(movieGenres.flat());
      setUpdateRating(false);
    });
  };

  const actorScrollTo = (index: number) => {
    if (actorsFlatList.current) {
      actorsFlatList.current.scrollToIndex({ animated: true, index: index });
    }
  };
  
  const scrollTop = () => {
    if (detailsScrollView.current) {
      detailsScrollView.current.scrollTo({ x: 0, y: 0, animated: true });
    }
  };

 

  const renderActorItem = ({ item, index }: any) => {
    let lastItemIndex = 0;
    if (!isLoadingCast) {
      lastItemIndex = cast.length - 1;
    }

    return (
      <View style={styles.renderItem}>
        <ActorCard
          item={item}
          index={index}
          lastItemIndex={lastItemIndex}
          scrollTo={actorScrollTo}
        />
      </View>
    );
  };

  useEffect(() => {
    getGenres();
  }, [id]);

  return (
    <ScrollView  ref={detailsScrollView}>

        <View style={ {backgroundColor:'#fff'}}>
          
      <MovieCard {...route.params} />
      <View style={styles.container}>
      <MovieCardFooter
          title={title}
          release_date={release_date}
          vote_average={vote_average}
        />
      
        {/*Genres*/}
        <Text style={styles.genres}>{genres.join(" | ")}</Text>
        {/*end Genres*/}

        <Text style={styles.title}>DESCRIPCIÓN</Text>
        <Text style={styles.text}>{overview} </Text>
        <View style={{paddingBottom:15}}>
        {!updateRating ? <RateButtons id={id} /> : null}
        </View>
        

        
        
        {cast ? <Text style={styles.title}>REPARTO</Text> : null}
        {!isLoadingCast ? (
          <FlatList
            ref={actorsFlatList}
            style={styles.flatList}
            horizontal={true}
            data={cast}
            renderItem={renderActorItem}
            keyExtractor={(item) => `item_${item.id}`}
          />
        ) : (
          <ActivityIndicator size="large" />
        )}

       

      </View>
      
      </View>
    </ScrollView>
    
  );
};

export default Details;
