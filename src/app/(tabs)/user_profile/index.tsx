import { View, Pressable } from 'react-native';
import { Stack } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import { AppText } from '../../../components/app-text';
import { DevTools } from '@/src/components/dev-tools';
import { ScreenScrollView } from '@/src/components/screen-scroll-view';

const SETTINGS_OPTIONS = [
    {
        icon: 'file-text' as const,
        label: 'Privacy Policy',
        onPress: () => { },
    },
    {
        icon: 'book-open' as const,
        label: 'Terms of Service',
        onPress: () => { },
    },
    {
        icon: 'trash-2' as const,
        label: 'Delete Account',
        onPress: () => { },
        danger: true,
    },
];

export default function SettingsScreen() {
    return (
        <>
        <Stack.Screen options={{ headerTitle: 'Settings', headerLargeTitleEnabled: true, headerShadowVisible: false, headerTransparent: true }} />
        <ScreenScrollView>
        <View className="flex-1 bg-background">
            <View className="mt-2">
                <View className="rounded-2xl bg-neutral-100 overflow-hidden">
                    {SETTINGS_OPTIONS.map((item, index) => (
                        <Pressable key={index} onPress={item.onPress} className="active:opacity-60">
                            <View className="px-4 py-3.5 flex-row items-center justify-between">
                                <View className="flex-row items-center gap-3">
                                    <Feather
                                        name={item.icon}
                                        size={18}
                                        color={item.danger ? '#ef4444' : '#888'}
                                    />
                                    <AppText
                                        className={`text-base ${item.danger ? 'text-red-500' : 'text-foreground'}`}
                                    >
                                        {item.label}
                                    </AppText>
                                </View>
                                <Feather name="chevron-right" size={18} color="#ccc" />
                            </View>
                            {index < SETTINGS_OPTIONS.length - 1 && (
                                <View className="h-px bg-neutral-200 mx-4" />
                            )}
                        </Pressable>
                    ))}
                </View>
            </View>
           {__DEV__ && (
            <View className="mt-6 p-4 rounded-2xl border-2 border-dashed border-red-400/50 bg-red-500/5">
              <AppText className="text-sm font-bold text-red-500 text-center mb-1">
                DEV ONLY — Not visible to users
              </AppText>
              <AppText className="text-xs text-muted text-center mb-3">
                These tools are only shown in development builds
              </AppText>
              <DevTools />
            </View>
                )}
        </View>
         </ScreenScrollView>
        </>
    );
}
