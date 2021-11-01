import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext} from '../context/AuthContext';

const SignInScreen = () => {
    const {state, signin} = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <AuthForm 
                headerText="Sign In to Tracker"
                errorMessage={state.errorMessage}
                onSubmit={({ email, password }) => { signin({ email, password })}} // prepei na ftiaksw thn signIn sunartisi sto AuthContext
                submitButtonText="Sign In"
            />
            <NavLink 
                text="You don't have and account? Sign Up here!"
                routeName="Signup"
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
