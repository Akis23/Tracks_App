import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContext } from 'react-navigation';

const TrackListScreen = ({ navigation }) => {
    return (
        <>
            <Text>Track List Screen</Text>
            <Button
                title="Track Detail"
                onPress={() => navigation.navigate('TrackDetail')}
            />
        </>
    );
};

const styles = StyleSheet.create({});

export default TrackListScreen;