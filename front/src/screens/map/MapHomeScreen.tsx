import React from 'react';
import { StyleSheet } from 'react-native';
import useAuth from '@/hooks/queries/useAuth';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

function MapHomeScreen() {
    const {logoutMutation} = useAuth();

    const handleLogout = () => {
        logoutMutation.mutate(null);
    };
    
    // return (
    // <SafeAreaView>
        //     <Text>맵 스크린</Text>
        //     <Button title="로그아웃" onPress={() => logoutMutation.mutate(null)} />
        // </SafeAreaView>
    // );
    return (
        <MapView
            style={styles.container}
            provider={PROVIDER_GOOGLE}
            showsUserLocation
            followsUserLocation
            showsMyLocationButton
            // showsMyLocationButton={false}
        />
    );
}

// const styles = StyleSheet.create({});
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
});

export default MapHomeScreen;