import { View } from 'react-native';
import { Stack } from 'expo-router';
import { AppText } from '../../../components/app-text';

export default function App() {
  return (
    <>
      <Stack.Screen options={{ headerTitle: 'Home', headerLargeTitleEnabled: true, headerShadowVisible: false, headerTransparent: true }} />
      <View className="flex-1 bg-background items-center justify-center px-6">
        <AppText className="text-3xl font-bold text-foreground text-center">
          Start building with Gauss
        </AppText>
      </View>
    </>
  );
}
