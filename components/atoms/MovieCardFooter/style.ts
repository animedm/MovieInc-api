import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";

export const styles = StyleSheet.create({
  imageFooter: {
    height: 130,
    width: 300,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    color: "#fff",
  },
  subTitlesData: {
    fontSize: 15,
    textAlign: "center",
    color: "#1f335e",
  },
  subTitles: {
    flexDirection: "row",
    width: 400,
    justifyContent: "space-around",
  },
  labels: {
    flexDirection: "row",
    width: 400,
    justifyContent: "space-around",
    marginTop: 20,
  },
  labelsData: {
    fontSize: 15,
    textAlign: "center",
    color: colors.baseColor,
  },
  labelsContainer: {
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,
    backgroundColor: "#e3dfd7",
    borderRadius: 20,
    paddingBottom: 20,
  },
});
