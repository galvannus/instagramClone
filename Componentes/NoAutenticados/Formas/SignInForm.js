import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Field, reduxForm } from 'redux-form';

const fieldNombre = (props) => {
    return (
        <View style={styles.textInput}>
            <TextInput placeholder={props.ph}
                onChangeText={props.input.onChange}
                value={props.input.value}
                keyboardType={props.input.name === 'correo' ? 'email-address' : 'default'}
                autoCapitalize="none"
                secureTextEntry={!!(props.input.name === 'password' || props.input.name === 'confirmacion')}
                onBlur={props.input.onBlur} />
            {props.meta.touched && props.meta.error && <Text style={styles.errors}>{props.meta.error}</Text>}
        </View>
    );
};

const validate = (values) => {
    const errors = {};

    if (!values.correo) {
        errors.correo = 'requerido';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]*\.[A-Z]{2,4}$/i.test(values.correo)) {
        errors.correo = 'correo invalido';
    }
    if (!values.password) {
        errors.password = 'requerido';
    }
    return errors;
}

const SignInForm = (props) => {
    return (
        <View>
            <Field name="correo" component={fieldNombre} ph='correo@correo.com' />
            <Field name="password" component={fieldNombre} ph='**********' />
            <Button title="Inicia sesión" onPress={props.handleSubmit((values) => { console.log(values); })} />
        </View>
    );
};

const styles = StyleSheet.create({
    textInput: {
        marginBottom: 16,
    },
    errors: {
        color: '#FF0000',
    },
});

export default reduxForm({
    form: 'SignInForm',
    validate,
})(SignInForm);