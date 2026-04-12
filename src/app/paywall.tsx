import { View } from 'react-native';
import { useNavigation, useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, useThemeColor } from 'heroui-native';
import { Ionicons } from '@expo/vector-icons';
import { AppText } from '../components/app-text';
import { useRevenueCat } from '../contexts/revenuecat-context';

const FEATURES = [
  { icon: 'stats-chart' as const, title: 'Advanced Statistics', description: 'Unlock detailed analytics and insights' },
  { icon: 'cloud-upload' as const, title: 'Cloud Sync', description: 'Sync your data across all devices' },
  { icon: 'shield-checkmark' as const, title: 'Priority Support', description: 'Get help when you need it most' },
];

export default function PaywallScreen() {
  const router = useRouter();
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const { packages, purchasePackage, restorePurchases } = useRevenueCat();
  const [foregroundColor] = useThemeColor(['foreground']);
  const [accentColor] = useThemeColor(['accent']);

  const handleClose = () => {
    if (navigation.canGoBack()) {
      router.back();
    } else {
      router.replace('/home');
    }
  };

  const handlePurchase = async () => {
    if (packages.length > 0) {
      try {
        await purchasePackage(packages[0]);
        handleClose();
      } catch (e) {
        // User cancelled or error — stay on paywall
      }
    }
  };

  const handleRestore = async () => {
    try {
      await restorePurchases();
      router.back();
    } catch (e) {
      // Error restoring
    }
  };

  return (
    <View className="flex-1 bg-background" style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      {/* Close button */}
      <View className="items-end px-4 pt-2">
        <Button variant="tertiary" size="sm" onPress={handleClose}>
          <Ionicons name="close" size={24} color={foregroundColor} />
        </Button>
      </View>

      {/* Hero */}
      <View className="items-center px-6 mt-4">
        <View className="w-20 h-20 rounded-full bg-accent items-center justify-center mb-4">
          <Ionicons name="diamond" size={40} color="white" />
        </View>
        <AppText className="text-2xl font-bold text-foreground text-center">Unlock Pro</AppText>
        <AppText className="text-base text-muted text-center mt-2">
          Get access to all premium features
        </AppText>
      </View>

      {/* Features */}
      <View className="px-6 mt-8 gap-5">
        {FEATURES.map((feature) => (
          <View key={feature.title} className="flex-row items-center gap-4">
            <View className="w-12 h-12 rounded-2xl bg-default items-center justify-center">
              <Ionicons name={feature.icon} size={24} color={accentColor} />
            </View>
            <View className="flex-1">
              <AppText className="text-base font-semibold text-foreground">{feature.title}</AppText>
              <AppText className="text-sm text-muted">{feature.description}</AppText>
            </View>
          </View>
        ))}
      </View>

      {/* CTA */}
      <View className="flex-1" />
      <View className="px-6 gap-3 pb-4">
        {packages.length > 0 && (
          <AppText className="text-center text-sm text-muted">
            {packages[0].product.priceString} / {packages[0].packageType === 'MONTHLY' ? 'month' : packages[0].packageType === 'ANNUAL' ? 'year' : packages[0].packageType}
          </AppText>
        )}
        <Button variant="primary" size="lg" onPress={handlePurchase}>
          <Button.Label>Continue</Button.Label>
        </Button>
        <Button variant="tertiary" size="sm" onPress={handleRestore}>
          <Button.Label>Restore Purchases</Button.Label>
        </Button>
      </View>
    </View>
  );
}
