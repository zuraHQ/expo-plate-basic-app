import { View } from 'react-native';
import { AppText } from '../../components/app-text';

export default function WelcomeScreen() {
    return (
        <View className="flex-1 bg-background px-6 items-center justify-center">
            <AppText className="text-4xl font-bold text-foreground text-center">
                Onboarding 1
            </AppText>
        </View>
    );
}
