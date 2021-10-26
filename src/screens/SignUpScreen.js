import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignUpScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Spacer>
            <Text h3>Sign Up for Tracker</Text>
            </Spacer>
            <Spacer />
            <Input label="Email" />
            <Input label="Password" />
            <Spacer>
            <Button
                title= "Sign up"
                onPress={() => navigation.navigate('Signin')}
            />
            </Spacer>
            {/* <Spacer>
            <Button
                title= "Main flow"
                onPress={() => navigation.navigate('mainFlow')}
            />
            </Spacer> */}
        </View>
    );
};

SignUpScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250

    }
});

export default SignUpScreen;