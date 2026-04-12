import { Stack } from 'expo-router';

export default function UserProfileLayout() {
  return (
    <Stack
      screenOptions={{
        headerLargeTitleEnabled: true,
        headerShadowVisible: false,
        headerTransparent: true,
      }}
    />
  );
}
