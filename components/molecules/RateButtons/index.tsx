import { TouchableOpacity, View } from "react-native";
import FavoriteButton from "../../atoms/FavoriteButton";
import { styles } from "./style";
import { useState, useEffect } from "react";
import { save, getValueFor } from "../../../helpers/storage";
import { postRateMovie } from "../../../services/setters/postRateMovie";

const RateButtons = ({ id }: any) => {
  const [rate, setRate] = useState(0);

  useEffect(() => {
    //get rate from storage
    getValueFor(`rate_${id}`).then((rate: any) => {
      if (rate) {
        setRate(JSON.parse(rate));
      }
    });

  }, [id]);

  return (
    <View style={styles.buttons}>
      {[2, 4, 6, 8, 10].map((item) => {
        return (
          <TouchableOpacity
            key={item}
            onPress={() => {
              if (rate == item) {
                setRate(item - 2);
                postRateMovie(id, item - 2);
                save(`rate_${id}`, JSON.stringify(item - 2));
              } else {
                setRate(item);
                postRateMovie(id, item);
                save(`rate_${id}`, JSON.stringify(item));
              }
            }}
          >
            <FavoriteButton isFavorite={rate >= item} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default RateButtons;
