import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function AddToDo(props) {

    const [text, setText] = useState('');

    return (
        <View>
            <TextInput
                placeholder='new todo..'
                value={text}
                onChangeText={val => {
                    setText(val);
                    console.log(val);
                }}
            />
            <Button
                value={text}
                onPress={() => {
                    props.onSubmitHandler(text)
                    setText((prev) => {
                        prev = ''
                        return prev
                    })
                }}
                title='add todo'
                color='coral'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})