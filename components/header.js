import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function  Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    header: {
        height: 70,
        paddingTop: 20,
        backgroundColor: '#fbc02d'
    },
    title:{
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    }
});
