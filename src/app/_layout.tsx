import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from '@expo-google-fonts/inter';
import { Redirect, Stack, usePathname } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  KeyboardProvider,
} from 'react-native-keyboard-controller';
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from 'react-native-reanimated';
import '../../global.css';
import { AppThemeProvider } from '../contexts/app-theme-context';
import { OnboardingProvider, useOnboarding } from '../contexts/onboarding-context';
import { RevenueCatProvider } from '../contexts/revenuecat-context';

configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false,
});

/**
 * Component that wraps app content inside KeyboardProvider
 */
function AppContent() {
  const { onboardingDone } = useOnboarding();
  const pathname = usePathname();

  const renderContent = () => {
    if (onboardingDone === null) {
      return null;
    }

    if (!onboardingDone && !pathname.startsWith('/onboarding')) {
      return <Redirect href="/onboarding" />;
    }

    return (
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="onboarding" />
          <Stack.Screen
            name="paywall"
            options={{
              presentation: 'modal',
              animation: 'slide_from_bottom',
              headerShown: false,
            }}
          />
        </Stack>
    );
  };

  return (
    <AppThemeProvider>
      {renderContent()}
    </AppThemeProvider>
  );
}

export default function Layout() {
  const fonts = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fonts) {
    return null;
  }

  return (
    <GestureHandlerRootView className="flex-1">
      <KeyboardProvider>
        <RevenueCatProvider>
          <OnboardingProvider>
            <AppContent />
          </OnboardingProvider>
        </RevenueCatProvider>
      </KeyboardProvider>
    </GestureHandlerRootView>
  );
}
