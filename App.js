import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";

const App = () => {
  const [urgencyVisible, setUrgencyVisible] = useState(false);
  const [navigation, setNavigation] = useState("map");

  const toggleUrgency = () => {
    setUrgencyVisible(!urgencyVisible);
  };

  const renderContent = () => {
    switch (navigation) {
      case "map":
        return (
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            {/* Insérer ici des marqueurs ou des éléments pour la carte */}
          </MapView>
        );
      case "urgency":
        return (
          <View style={styles.urgencyContainer}>
            {/* Insérer ici des éléments pour créer une urgence */}
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>{renderContent()}</View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => setNavigation("map")}
        >
          <Text style={styles.buttonText}>🗺️ Map</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => setNavigation("urgency")}
        >
          <Text style={styles.buttonText}>⚠️ Urgence</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default App;
