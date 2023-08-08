
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import appStyles from "./Style/appStyle.style";
import Home from "./Page/Home";
import Profil from "./Page/Profil";

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
            style={appStyles.map}
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
          <View style={appStyles.urgencyContainer}>
            {/* Insérer ici des éléments pour créer une urgence */}
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={appStyles.container}>
      <View style={appStyles.contentContainer}>{renderContent()}</View>

      <View style={appStyles.footer}>
        <TouchableOpacity
          style={appStyles.footerButton}
          onPress={() => setNavigation("map")}
        >
          <Text style={appStyles.buttonText}>🗺️ Map</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={appStyles.footerButton}
          onPress={() => setNavigation("urgency")}
        >
          <Text style={appStyles.buttonText}>⚠️ Urgence</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

