import Constants from 'expo-constants';

const isExpoGo = Constants.appOwnership === 'expo';

export const REVENUECAT_CONFIG = {
    apiKey: {
        // Use Test Store key in Expo Go, real keys in dev/prod builds
        ios: isExpoGo ? 'test_xaflwzNCeHFxfdVOmrwCYxsYBbU' : 'your_revenuecat_ios_api_key',
        android: isExpoGo ? 'test_xaflwzNCeHFxfdVOmrwCYxsYBbU' : 'your_revenuecat_android_api_key',
    },
    entitlements: {
        pro: 'pro',
    },
};
