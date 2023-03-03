import { StyleSheet, useColorScheme } from "react-native";
import { colors } from "../../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light.background,
    alignItems: "center",
    justifyContent: "center",
  },
  loading: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  title: {
    fontWeight:"100",
    color: colors.baseColor,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 40,
  },
  renderItem: {
    paddingHorizontal: 5,
    alignItems: "center",
  },
});
