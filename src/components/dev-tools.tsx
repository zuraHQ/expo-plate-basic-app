import { Pressable, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useOnboarding } from '../contexts/onboarding-context';
import { storage, StorageKeys } from '../helpers/utils/storage';

export function DevTools() {
    const { setOnboardingDone } = useOnboarding();
    const router = useRouter();

    const handleResetOnboarding = async () => {
        await setOnboardingDone(false);
        await storage.remove(StorageKeys.USER_NAME);
        await storage.remove(StorageKeys.USER_PREFERENCES);
    };

    return (
        <View className="mt-2 gap-3">
            <Pressable
                className="rounded-full bg-red-500 py-3 items-center"
                onPress={handleResetOnboarding}
            >
                <Text className="text-white font-semibold text-base">Reset Onboarding</Text>
            </Pressable>
            <Pressable className="rounded-full bg-accent py-3 items-center" onPress={() => router.push('/paywall')}>
                <Text className="text-white font-semibold text-base">Test Paywall</Text>
            </Pressable>
        </View>
    );
}
