import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import { colors } from '@/constants';
import FeedFavoriteList from '@/components/feed/FeedFavoriteList';
import { ThemeMode } from '@/types';
import useThemeStore from '@/store/useThemeStore';

function FeedFavoriteScreen() {
    const { theme } = useThemeStore();
    const styles = styling(theme);
    
    return (
        <SafeAreaView style={styles.container}>
            <FeedFavoriteList />
        </SafeAreaView>
    );
}

//const styles = StyleSheet.create({
const styling = (theme: ThemeMode) =>
    StyleSheet.create({
        container: {
            flex: 1,
            //backgroundColor: colors.WHITE,
            backgroundColor: colors[theme].WHITE,
        },
    });
    
export default FeedFavoriteScreen;