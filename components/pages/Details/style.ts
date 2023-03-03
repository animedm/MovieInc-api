import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor:"#fff",
    padding: 10,
    alignItems: "center",
  },
  renderItem: {
    paddingTop: 25,
    paddingHorizontal: 5,
    alignItems: "center",
  },
  text: {
    color: colors.light.text,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 15,
    textAlign: "justify",
    marginBottom: 25,
  },
  title: {
    color: colors.baseColor,
    paddingBottom: 10,
    fontSize: 30,
    textAlign: "center",
  },
  genres: {
    color: colors.baseColor,
    marginTop: -10,
    paddingBottom: 10,
    fontSize: 20,
    textAlign: "center",
    marginBottom: 25,
  },
  flatList: {
    marginTop: -20,
  },
});
