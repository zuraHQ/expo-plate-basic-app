import { View } from 'react-native';
import { Stack } from 'expo-router';
import MapView from 'react-native-maps';
import { AppText } from '../../../components/app-text';

export default function App() {
  return (
    <>
      <Stack.Screen options={{ headerTitle: 'Home', headerLargeTitleEnabled: true, headerShadowVisible: false, headerTransparent: true }} />
      <View className="flex-1 bg-background px-6">
        <AppText className="text-2xl font-bold text-foreground mt-4 mb-4">
          Start building with Gauss
        </AppText>
        <View className="flex-1 rounded-2xl overflow-hidden mb-4">
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: 41.7151,
              longitude: 44.8271,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            }}
          />
        </View>
      </View>
    </>
  );
}
