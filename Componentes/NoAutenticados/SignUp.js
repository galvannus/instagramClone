import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import SignUpform from './Formas/SignUpForm';

class SignUp extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <SignUpform />
                <Button title="SignIn" onPress={() => { navigation.goBack(); }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#90EE90',
        paddingHorizontal: 16,
    },
});
const mapStateToProps = state => ({

    numero: state.reducerPrueba,

});
const mapDispatchToProps = dispatch => ({
    aumentar: () => {
        dispatch({ type: 'AUMENTAR_REDUCER_PRUEBA' });
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)