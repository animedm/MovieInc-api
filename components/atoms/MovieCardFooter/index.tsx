import { Text, View } from "react-native";
import {Movie} from "../../../Interfaces/movie.interface";
import { styles } from "./style";

const MovieCardFooter = ({ release_date,vote_average=0 }: Movie) => {
    
  return (
    <View style={styles.imageFooter}>
      <View style={styles.labelsContainer}>
        <View style={styles.labels}>
          <Text style={styles.labelsData}>CALIFICACIÓN</Text>
          <Text style={styles.labelsData}>FECHA DE ESTRENO</Text>
        </View>
        <View style={styles.subTitles}>
          <Text style={styles.subTitlesData}>{parseFloat(vote_average.toString()).toFixed(2)||'0'}</Text>
          <Text style={styles.subTitlesData}>{release_date||'Indefinida'}</Text>
        </View>
      </View>
    </View>
  );
};

export default MovieCardFooter;
