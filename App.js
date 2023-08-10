import Home from "./Page/Home";
import Profil from "./Page/Profil";
import Connexion from "./Page/Connexion";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
const navTheme = {
  colors: {
    background: "transparent",
  },
};
const App = () => {
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Connexion" component={Connexion} />
        <Stack.Screen name="Profil" component={Profil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
