import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { colors } from "../../../constants";
const ActorCard = ({ item, index, lastItemIndex, scrollTo }: any) => {
  const { name, character } = item;

  return (
    <View style={styles.container}>
      {index !== 0 ? (
        <TouchableOpacity
          onPress={() => {
            scrollTo(index - 1);
          }}
          style={styles.indicatorLeft}
        >
          <FontAwesome size={30} name="arrow-left" color={colors.light.background} />
        </TouchableOpacity>
      ) : null}
      <View style={styles.labelsContainer}>
        <View style={styles.labels}>
          <Text style={styles.labelsData}>{name}</Text>
        </View>
        <View style={styles.subTitles}>
          <Text style={styles.subTitlesData}>{character}</Text>
        </View>
      </View>
      {index !== lastItemIndex ? (
        <TouchableOpacity
          onPress={() => {
            scrollTo(index + 1);
          }}
          style={styles.indicatorRight}
        >
          <FontAwesome size={30} name="arrow-right" color={colors.light.background} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default ActorCard;
