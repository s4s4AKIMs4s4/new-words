import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Settings from './src/pages/Settings'
import Home from './src/pages/Home'
import Topics from './src/pages/Topics'
import Learn from './src/pages/Learn'
import Dictionary from './src/pages/Dictionary'

const Stack = createNativeStackNavigator()

export const Navigation = () => {
  const getHederOptions = (tittle: string): any => {
    return {
      title: tittle,
      headerStyle: {
        backgroundColor: '#343a40'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={getHederOptions('LearnWords')} />
        <Stack.Screen name="Settings" component={Settings} options={getHederOptions('Settings')} />
        <Stack.Screen name="Topics" component={Topics} options={getHederOptions('Topics')} />
        <Stack.Screen name="Learn" component={Learn} options={getHederOptions('Learn')} />
        <Stack.Screen
          name="Dictionary"
          component={Dictionary}
          options={getHederOptions('Dictionary')}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
