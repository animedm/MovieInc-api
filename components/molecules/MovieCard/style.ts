import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingTop:10,
    borderRadius: 15,
    backgroundColor:"#fff",
    marginVertical: 30,
    alignItems: "center",
  },
  imageContainer: {
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,
    elevation: 22,
    marginBottom: 15,
  },
  image: {
    width: 400,
    height: 530,
    borderRadius: 15,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    color: "#000",
  },
  FavoriteButton: {
    marginBottom: -70,
    zIndex: 10,
    marginLeft: 320,
  },
});
