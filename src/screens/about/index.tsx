import { View, Text } from 'react-native';
import React from 'react';
import { styles } from "./styles"

export default function About() {
  return (
    <View style={styles.container}>
      <View style={styles.line}>
        <Text style={styles.title}>Version</Text>
        <Text style={styles.text}>2.1.0</Text>
      </View>

      <View style={styles.line}>
        <Text style={styles.title}>Build</Text>
        <Text style={styles.text}>755</Text>
      </View>

    </View>
  )
}