import { View } from 'react-native';
import { AppText } from '../../components/app-text';

export default function SetupScreen() {
    return (
        <View className="flex-1 bg-background px-6 items-center justify-center">
            <AppText className="text-4xl font-bold text-foreground text-center">
                Onboarding 2
            </AppText>
        </View>
    );
}
