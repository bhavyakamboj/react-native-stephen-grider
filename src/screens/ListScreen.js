import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => { 
  // First approach is to have key property in object
  // const friends = [
  //   { name : 'Friend # 1', key: '1' },
  //   { name : 'Friend # 2', key: '2'},
  //   { name : 'Friend # 3', key: '3'},
  //   { name : 'Friend # 4', key: '4'},
  //   { name : 'Friend # 5', key: '5'},
  //   { name : 'Friend # 6', key: '6'},
  //   { name : 'Friend # 7', key: '7'},
  //   { name : 'Friend # 8', key: '8'},
  //   { name : 'Friend # 9', key: '9'},
  //   { name : 'Friend # 10', key: '10'}
  // ]
  const friends = [
    { name : 'Friend # 1', age: 54},
    { name : 'Friend # 2', age: 44},
    { name : 'Friend # 3', age: 24},
    { name : 'Friend # 4', age: 35},
    { name : 'Friend # 5', age: 56},
    { name : 'Friend # 6', age: 14},
    { name : 'Friend # 7', age: 95},
    { name : 'Friend # 8', age: 25},
    { name : 'Friend # 9', age: 34},
    { name : 'Friend # 10', age: 65}
  ]
    return (
      <FlatList
          showsVerticalScrollIndicator={false}
          // horizontal
          // showsHorizontalScrollIndicator={false}
          keyExtractor= { friend => friend.name } 
          data={friends} 
          renderItem={({ item }) => {
            return (
              <Text style={styles.textStyle}>
                {item.name} - Age {item.age}
              </Text>
            );
          }}
      />
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        marginVertical: 50,
        textAlign: "center"
      },
    });

export default ListScreen;