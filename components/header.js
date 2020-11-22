import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>
                My Todos
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: 'coral'
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
})