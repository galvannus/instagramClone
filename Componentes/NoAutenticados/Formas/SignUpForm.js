import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { autenticacion } from '../../../Store/Servicios/Firebase';

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
    if (!values.nombre) {
        errors.nombre = 'requerido';
    }
    if (!values.correo) {
        errors.correo = 'requerido';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]*\.[A-Z]{2,4}$/i.test(values.correo)) {
        errors.correo = 'correo invalido';
    }
    if (!values.password) {
        errors.password = 'requerido';
    }
    if (!values.confirmacion) {
        errors.confirmacion = 'requerido';
    } else if (values.password != values.confirmacion) {
        errors.confirmacion = 'el password debe de coincidir';
    }
    return errors;
}

const SignUpform = (props) => {
    return (
        <View>
            <Field name="nombre" component={fieldNombre} ph='nombre' />
            <Field name="correo" component={fieldNombre} ph='correo@correo.com' />
            <Field name="password" component={fieldNombre} ph='**********' />
            <Field name="confirmacion" component={fieldNombre} ph='***********' />
            <Button title="Registrar"
                onPress={props.handleSubmit((values) => {
                    autenticacion
                        .createUserWithEmailAndPassword(values.correo, values.password)
                        .then((success) => {

                        })
                        .catch((error) => {
                            // Handle Errors here.
                            var errorCode = error.code;
                            var errorMessage = error.message;
                            // ...
                        });
                })} />
        </View>
    );
};

const styles = StyleSheet.create({
    textInput: {
        marginBottom: 16,
    },
    errors: {
        color: '#FF0000',
    }
});

export default reduxForm({
    form: 'SignUpForm',
    validate,
})(SignUpform);