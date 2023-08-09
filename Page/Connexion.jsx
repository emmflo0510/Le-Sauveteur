import { SafeAreaView, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

function Connexion() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>Ceci est la page de connexion</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
export default Connexion;
