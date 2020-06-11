import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

import Header from './components/header';
import ToDoItem from './components/toDoItem';
import AddTodo from './components/addTodo';


export default function App () {
  const [todos, setTodos] = useState([
    { text: 'Markete Git', key: '1' },
    { text: 'Kitap Oku', key: '2' },
    { text: 'Geziye Git', key: '3' }
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }

  const submitHandler = (text) => {
      setTodos ((prevTodos)=> { 
        return[
          { text: text, key: Math.random().toString() },
          ...prevTodos
        ];
      })
  }

  return (
    <View style={styles.container}>
     <Header />
    
      <View style={styles.content}>
        <AddTodo submitHandler= {submitHandler} />
        <View style={styles.list}>
          <FlatList 
            data={todos}
            renderItem={({item}) => (
              <ToDoItem item={item} pressHandler= {pressHandler} />
            )}
           />
        </View>
      </View>
    </View>
  );
}

 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    content:{
      padding:40,
    },
    list: {
      margin: 20,
    }
 });

