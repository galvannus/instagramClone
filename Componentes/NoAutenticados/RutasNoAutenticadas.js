import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

const SignIn = (props) => {
    const { navigation } = props;
    return (
        <View style={{ flex: 1, justifyContent: 'center' }} >
            <Text>Componente SignIn</Text>
            <Button title='Navegar a SingUp' onPress={() => { navigation.navigate('SignUp') }} />
        </View>
    );
};
const SignUp = (props) => {
    const { navigation } = props;
    return (
        <View style={{ flex: 1, justifyContent: 'center' }} >
            <Text>Componente SignUp</Text>
            <Button title='Regresar' onPress={() => { navigation.goBack(); }} />
        </View>
    );

};

const RutasNoAutenticadas = StackNavigator({
    SignIn: {
        screen: SignIn,
    },
    SignUp: {
        screen: SignUp,
    }
},
    {
        headerMode: 'none',
    }
);

export { RutasNoAutenticadas };