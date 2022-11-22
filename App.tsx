import { Provider } from 'react-redux';
import { Navigation } from './Navigation';
import { setupStore } from './src/store/store';
import { SelectProvider } from '@mobile-reality/react-native-select-pro';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const store = setupStore()
  return (
    <Provider store={store}>
      <SelectProvider>
        <StatusBar
          animated={true}
          backgroundColor="#343a40"
          />
        <Navigation />
      </SelectProvider>
    </Provider>
  );
}

