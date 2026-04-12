import { View } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from 'heroui-native';
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
            <Button variant="primary" className="bg-red-500" onPress={handleResetOnboarding}>
                <Button.Label>Reset Onboarding</Button.Label>
            </Button>
            <Button variant="primary" onPress={() => router.push('/paywall')}>
                <Button.Label>Test Paywall</Button.Label>
            </Button>
        </View>
    );
}
