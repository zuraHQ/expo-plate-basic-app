import { Card } from 'heroui-native';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AppText } from '../../components/app-text';

export default function SetupScreen() {
    return (
        <View
            className="flex-1 bg-background px-6"
            style={{ paddingTop: 40 }}
        >
            <View className="flex-1">
                <AppText className="text-3xl font-bold text-foreground mb-2">
                    Gauss Components include
                </AppText>

                <View className="gap-4 mt-6">
                    <Card className="p-4 border border-border/50">
                        <View className="flex-row items-center gap-4">
                            <AppText className="text-2xl">💳</AppText>
                            <View className="flex-1">
                                <AppText className="font-semibold text-foreground">Payments</AppText>
                                <AppText className="text-sm text-muted">RevenueCat integration</AppText>
                            </View>
                        </View>
                    </Card>

                    <Card className="p-4 border border-border/50">
                        <View className="flex-row items-center gap-4">
                            <AppText className="text-2xl">📱</AppText>
                            <View className="flex-1">
                                <AppText className="font-semibold text-foreground">Onboarding</AppText>
                                <AppText className="text-sm text-muted">Production-ready onboarding flow</AppText>
                            </View>
                        </View>
                    </Card>

                    <Card className="p-4 border border-border/50">
                        <View className="flex-row items-center gap-4">
                            <AppText className="text-2xl">✨</AppText>
                            <View className="flex-1">
                                <AppText className="font-semibold text-foreground">Hero UI</AppText>
                                <AppText className="text-sm text-muted">Premium components library</AppText>
                            </View>
                        </View>
                    </Card>

                    <Card className="p-4 border border-border/50">
                        <View className="flex-row items-center gap-4">
                            <AppText className="text-2xl">🌪️</AppText>
                            <View className="flex-1">
                                <AppText className="font-semibold text-foreground">Uniwind</AppText>
                                <AppText className="text-sm text-muted">Universal styling with Tailwind CSS</AppText>
                            </View>
                        </View>
                    </Card>
                </View>
            </View>
        </View>
    );
}
