import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import { CharacterScreen } from "../screens/CharacterScreen";

const Stack = createNativeStackNavigator();

export const MainNavigation = () => {
    return (
        <NavigationContainer initialState={{ index: 0, routes: [{ name: 'Home' }] }}>
            <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Лента персонажей' }} />               
            <Stack.Screen name="Character" component={CharacterScreen} options={{ title: 'Персонаж' }} />           
                </Stack.Navigator>
        </NavigationContainer>
    )
}