import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage, 
  defaultExpires: null,
  enableCache: true,
  sync: {  }
});

export default storage;