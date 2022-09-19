import { Provider } from 'react-redux';
import { Navigation } from './Navigation';
import { setupStore } from './srote/store';
import { SelectProvider } from '@mobile-reality/react-native-select-pro';

export default function App() {
  const store = setupStore()
  return (
    <Provider store={store}>
      <SelectProvider>
        <Navigation />
      </SelectProvider>
    </Provider>
  );
}

