import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, Image } from 'react-native';
import { styles } from "./styles"

const { width } = Dimensions.get('window');
// Dados de frases motivacionais
const images = [
    { id: '1', source: require("../../assets/Brazuca - Planning.png")},
];

export default function Carrosel() {
  const renderItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Image style={styles.img} source={item.source} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
}
