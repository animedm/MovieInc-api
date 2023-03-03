import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";
export const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: "center",
    color: "#fff",
  },
  subTitlesData: {
    fontSize: 20,
    textAlign: "center",
    color: "#1f335e",
  },
  subTitles: {
    flexDirection: "row",
    width: 350,
    justifyContent: "center",
  },
  labels: {
    flexDirection: "row",
    width: 360,
    justifyContent: "center",
    marginTop: 15,
  },
  labelsData: {
    fontSize: 25,
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
    paddingBottom: 15,
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 140,
    width: 350,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  indicatorLeft: {
    marginBottom: -3,
    marginRight: -40,
    marginLeft: 20,
    zIndex: 10,
  },
  indicatorRight: {
    marginBottom: -3,
    marginRight: 20,
    marginLeft: -40,
    zIndex: 11,
  },
});
