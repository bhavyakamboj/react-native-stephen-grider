import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { View, Text, StyleSheet, Button } from 'react-native';

const ColorScreen = () => {
    const [colors, setColors] = useState([]);
    console.log(colors);

    return (
        <View>
            <Button 
            title='Add a color'
            onPress={() => {
                setColors([...colors, randomRgb()])
            }}
            />
            <FlatList
            data={colors}
            keyExtractor={ item => item }
            renderItem={({ item }) => {
                return (<View style={ { height: 100, width: 395, backgroundColor: item } } />);
            }}
            />
        </View>
    )
}

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({});

export default ColorScreen;