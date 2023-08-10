import { StyleSheet } from "react-native";

const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  txt: {
    zIndex: 1,
  },
});
export default homeStyle;
