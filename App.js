import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Platform, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

//components
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddToDo from './components/addToDo';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1', checked: false },
    { text: 'create an app', key: '2', checked: true },
    { text: 'play on the switch', key: '3', checked: false }
  ]);

  const pressHandler = key => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => {
        return todo.key !== key
      })
    })
  }

  const onCheckHandler = key => {
    let newTodos = todos;
    newTodos = todos.map(todo => {
      if (todo.key === key) {
        todo.checked = !todo.checked
        return todo
      } else {
        return todo
      }
    })
    setTodos(newTodos);
  }

  const submitHandler = (text) => {
    if (text.trim().length) {
      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString(), checked: false },
          ...prevTodos
        ]
      })
    } else {
      Alert.alert('Please enter task first');
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddToDo
            onSubmitHandler={submitHandler}
          />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem
                  item={item}
                  pressHandler={pressHandler}
                  onCheck={onCheckHandler}
                />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : null
  },
  content: {
    padding: 40,
    flex: 1
  },
  list: {
    flex: 1,
    marginTop: 20,
  }
});
