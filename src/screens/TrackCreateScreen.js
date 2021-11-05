import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import Map from '../components/Map';
import { SafeAreaView } from 'react-native-safe-area-context';
import { requestForegroundPermissionsAsync } from 'expo-location';
import { Text } from 'react-native-elements';

const TrackCreateScreen = () => {
    const [err, setErr] = useState(null);
    
    const startWatching = async () => {
        try {
          const { granted } = await requestForegroundPermissionsAsync();
          if (!granted) {
            throw new Error('Location permission not granted');
          }
        } catch (e) {
          setErr(e);
        }
      };

      useEffect(() => {
        startWatching();
      }, []);

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h2>Track Create Screen</Text>
            <Map />
            {err ? <Text>Please enable location services</Text> : null}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;