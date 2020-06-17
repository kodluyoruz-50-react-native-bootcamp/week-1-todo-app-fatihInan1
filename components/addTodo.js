import React, {useState} from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';

export default function AddTodo({submitHandler}){
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    return ( 
        <View>
            <TextInput
                style={StyleSheet.input}
                placeholder='Todos...'
                onChangeText={changeHandler}
             />
            <Button onPress={() => submitHandler(text)} title='Add ToDo' color='#fbc02d' />
        </View>
    )
}