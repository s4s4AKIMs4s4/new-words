import { createNativeStackNavigator } from "@react-navigation/native-stack";
import App from "./App";
import { NavigationContainer } from "@react-navigation/native"
import Settings from "./src/pages/Settings";
import Home from "./src/pages/Home";
import Topics from "./src/pages/Topics";
import Learn from "./src/pages/Learn";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{
                    title: 'My home',
                    headerStyle: {
                        backgroundColor: '#343a40',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }} />
                <Stack.Screen name="FullPost" component={Settings} options={{ title: 'news' }} />
                <Stack.Screen name="Post" component={Topics} options={{ title: 'No news' }} />
                <Stack.Screen name="Learn" component={Learn} options={{ title: 'Learn' }} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}


