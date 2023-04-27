import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

interface ImageDetailsProps {
  uri: string;
}

export const ImageDetails: React.FC<ImageDetailsProps> = ({ uri }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  }})