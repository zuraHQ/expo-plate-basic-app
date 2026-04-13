import { Pressable, Text, View } from 'react-native';
import { useNavigation, useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useCSSVariable } from 'uniwind';
import { Ionicons } from '@expo/vector-icons';
import { AppText } from '../components/app-text';
import { useRevenueCat } from '../contexts/revenuecat-context';

export default function PaywallScreen() {
  const router = useRouter();
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const { packages, purchasePackage, restorePurchases } = useRevenueCat();
  const [foregroundColor] = useCSSVariable(['--color-foreground']) as [string];

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
        // User cancelled or error
      }
    }
  };

  const handleRestore = async () => {
    try {
      await restorePurchases();
      handleClose();
    } catch (e) {
      // Error restoring
    }
  };

  return (
    <View className="flex-1 bg-background" style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      {/* Close */}
      <View className="items-end px-4 pt-2">
        <Pressable className="p-2" onPress={handleClose}>
          <Ionicons name="close" size={24} color={foregroundColor} />
        </Pressable>
      </View>

      {/* Content */}
      <View className="flex-1 items-center justify-center px-6">
        <AppText className="text-3xl font-bold text-foreground text-center">
          Paywall
        </AppText>
        {packages.length > 0 && (
          <AppText className="text-base text-muted text-center mt-2">
            {packages[0].product.priceString} / {packages[0].packageType === 'MONTHLY' ? 'month' : packages[0].packageType === 'ANNUAL' ? 'year' : packages[0].packageType}
          </AppText>
        )}
      </View>

      {/* Buttons */}
      <View className="px-6 gap-3 pb-4">
        <View className="bg-orange-600 rounded-2xl overflow-hidden">
          <Pressable className="py-4 items-center active:opacity-80" onPress={handlePurchase}>
            <Text className="text-white font-semibold text-base">Continue</Text>
          </Pressable>
        </View>
        <Pressable className="py-3 items-center active:opacity-60" onPress={handleRestore}>
          <Text className="text-muted text-sm">Restore Purchases</Text>
        </Pressable>
      </View>
    </View>
  );
}
