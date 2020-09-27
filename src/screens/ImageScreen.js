import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => { 
  const images = [
    {url: '../../assets/forest.jpg', title: 'Forest', score: 9},
    {url: '../../assets/beach.jpg', title: 'Beach', score: 5},
    {url: '../../assets/mountain.jpg', title: 'Mountain', score: 7}
  ]
  return <View>
    <ImageDetail 
      title={images[0].title} 
      imageSource={require('../../assets/forest.jpg')}
      score={images[0].score}
      />
    <ImageDetail 
      title={images[1].title} 
      imageSource={require('../../assets/beach.jpg')}
      score={images[1].score}
      />
    <ImageDetail 
      title={images[2].title} 
      imageSource={require('../../assets/mountain.jpg')}
      score={images[2].score}
      />
  </View>
}

const styles = StyleSheet.create({});

export default ImageScreen;