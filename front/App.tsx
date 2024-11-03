import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigations/root/RootNavigator';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './src/api/queryClient';
import Toast, { BaseToast, BaseToastProps, ErrorToast } from 'react-native-toast-message';
import { colors } from '@/constants';
import useThemeStorage from '@/hooks/useThemeStorage';

const toastConfig = {
    success: (props: BaseToastProps) => (
        <BaseToast
            {...props}
            //style={{ borderLeftColor: colors.BLUE_500 }}
            style={{ borderLeftColor: colors['light'].BLUE_500 }}
            text1Style={{
                fontSize: 14,
            }}
            text2Style={{
                fontSize: 12,
            }}
        />
    ),
    error: (props: BaseToastProps) => (
        <ErrorToast
            {...props}
            //style={{ borderLeftColor: colors.RED_500 }}
            style={{ borderLeftColor: colors['light'].RED_500 }}
            text1Style={{
                fontSize: 14,
            }}
            text2Style={{
                fontSize: 12,
            }}
        />
    ),
};


function App() {
    const { theme } = useThemeStorage();

    return (
        <QueryClientProvider client={queryClient}>
            <StatusBar
                barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
            />
            <NavigationContainer>
                <RootNavigator />
                <Toast config={toastConfig} />
            </NavigationContainer>
        </QueryClientProvider>
    );
}

export default App;
