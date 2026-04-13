import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface OnboardingButtonProps {
    label: string;
    onPress: () => void;
}

export function OnboardingButton({ label, onPress }: OnboardingButtonProps) {
    const insets = useSafeAreaInsets();

    return (
        <View
            className="px-6"
            style={{ paddingBottom: insets.bottom, paddingTop: 12 }}
        >
            <Pressable className="rounded-2xl bg-orange-600 py-3 items-center" onPress={onPress}>
                <Text className="text-white font-semibold text-base">{label}</Text>
            </Pressable>
        </View>
    );
}
