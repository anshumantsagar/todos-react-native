import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View, CheckBox } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ pressHandler, item, onCheck }) {
    return (
        <TouchableOpacity >
            <View style={styles.item}>
                <CheckBox
                    value={item.checked}
                    onValueChange={() => onCheck(item.key)}
                />
                <Text style={styles.itemText}>{item.text}</Text>
                <MaterialIcons name='delete' size={18} color='#333' onPress={() => pressHandler(item.key)} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 1,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemText: {
        marginRight: 0
    }
});