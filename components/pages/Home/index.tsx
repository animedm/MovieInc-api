import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import MovieCard from "../../molecules/MovieCard";
import MovieCardFooter from "../../atoms/MovieCardFooter";
import { useFetch } from "../../../hooks/useFetch";
import { styles } from "./style";
import { getMovies } from "../../../services/getters";

const Home = () => {
  const { data, isLoading } = useFetch(getMovies);

  const renderItem = ({ item }: any) => (
    <View style={styles.renderItem}>
      <MovieCard {...item} />
      <MovieCardFooter
        title={item.title}
        release_date={item.release_date}
        vote_average={item.vote_average}
      />
    </View>
  );

  return (
    <SafeAreaView style={[styles.container, isLoading ? styles.loading : null]}>
      <Text style={styles.title}>MOVIES INC</Text>
      {!isLoading ? (
        <FlatList
        
          data={[...data].sort((a, b) => {
            {/*Sort data alphabetically*/}
            if (a == null || b == null) return 0;
            return a.title > b.title ? 1 : -1;
          })}
          renderItem={renderItem}
          keyExtractor={(item) => `item_${item.id}`}
        />
      ) : (
        <ActivityIndicator size="large" />
      )}
    </SafeAreaView>
  );
};
export default Home;
