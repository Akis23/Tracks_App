import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext} from '../context/AuthContext';


const SignInScreen = () => {
    const {state, signin, clearErrorMessage} = useContext(AuthContext);
    return (
        <View style={styles.container}>
            {/* something goes wrong */}
            <NavigationEvents 
                onWillBlur={clearErrorMessage}
            />
            <AuthForm 
                headerText="Sign In to Tracker"
                errorMessage={state.errorMessage}
                onSubmit={({ email, password }) => { signin({ email, password })}} 
                submitButtonText="Sign In"
            />
            <NavLink 
                routeName="Signup"
                text="You don't have and account? Sign Up here!"
            />
        </View>
    );
};

SignInScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    }
});

export default SignInScreen;
