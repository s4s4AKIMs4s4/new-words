import AsyncStorageMock from "@react-native-async-storage/async-storage/jest/async-storage-mock";

AsyncStorageMock.multiGet = jest.fn(([keys], callback) => {
  return [[["foo"], ["bar"]]];
});

export default AsyncStorageMock;
