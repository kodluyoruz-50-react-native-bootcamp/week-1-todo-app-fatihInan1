import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function AddTodo({submitHandler}){
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    return ( 
        <View>
            <TextInput
                style={StyleSheet.input}
                placeholder='yapılacaklar...'
                onChangeText={changeHandler}
             />
             <Button onPress={() => submitHandler(text) } title='ekle' color='coral' />
        </View>
    )
}