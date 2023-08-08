import { StyleSheet } from "react-native";

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#f5f5f5",
  },
  footerButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
  },
  urgencyContainer: {
    position: "absolute",
    top: 20,
    right: 20,
    padding: 10,
    backgroundColor: "red",
    alignItems: "center",
    zIndex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default appStyles;
