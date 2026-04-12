import AsyncStorage from '@react-native-async-storage/async-storage';

export const StorageKeys = {
  ONBOARDING_DONE: 'onboarding_done',
  USER_NAME: 'user_name',
  USER_PREFERENCES: 'user_preferences',
} as const;

export const storage = {
  set: async (key: string, value: string | boolean | number) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error('Error saving data', e);
    }
  },
  getString: async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (e) {
      console.error('Error reading data', e);
      return null;
    }
  },
  getBoolean: async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value ? JSON.parse(value) : false;
    } catch (e) {
      console.error('Error reading data', e);
      return false;
    }
  },
  remove: async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.error('Error removing data', e);
    }
  },
};
