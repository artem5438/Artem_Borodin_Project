import { SafeAreaProvider } from "react-native-safe-area-context";
import { MainNavigation } from "./navigation/MainNavigation";

function App() {
  return (
    <SafeAreaProvider>
        <MainNavigation />
    </SafeAreaProvider>
  );
}

export default App;