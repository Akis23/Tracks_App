import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import { Polyline } from 'react-native-maps';

const Map = () => {
    let points = [];
    for(let i=0; i<20; i++){
        if(i % 2 === 0){
            points.push({
                latitude: 37.33233 + i*0.001,
                longitude: -122.03121 + i*0.01
            });
        } else {
            points.push({
                latitude: 37.33233 - i*0.002,
                longitude: -122.03121 + i*0.01
            });
        }
       
    }
    return (
        <MapView
            style={styles.map}
            initialRegion={{
                latitude: 37.33233,
                longitude: -122.03121,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
        >
            <Polyline
                // linecap issue solved
                lineDashPattern={[1]}
                coordinates={points}
                
            />
        </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map;


