import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Comentarios from './Comentarios';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container} >
                <Text> Home </Text>
                <Button title="Autor" onPress={() => { navigation.navigate('Autor'); }} />
                <Button title="Comentarios" onPress={() => { navigation.navigate('Comentarios'); }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

export default Home;