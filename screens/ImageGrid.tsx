import React from 'react';
import { View, StyleSheet, FlatList, Image } from 'react-native';

const images = [
    { id: 1, uri: 'https://source.unsplash.com/random/400x400?nature' },
    { id: 2, uri: 'https://source.unsplash.com/random/400x400?water' },
    { id: 3, uri: 'https://source.unsplash.com/random/400x400?mountain' },
    { id: 4, uri: 'https://source.unsplash.com/random/400x400?beach' },
  ];
  interface ImageGridProps {
    images: { id: number; uri: string }[];
    columns: number;
  }
  
  export const ImageGrid: React.FC<ImageGridProps> = ({ }) => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.uri }} style={styles.image} />
      </View>
    );
  };

  return (
    <FlatList
      data={images}
      renderItem={renderItem}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: { 
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  imageContainer: {
    flex: 1,
    marginHorizontal: 5,
    marginBottom: 10,
  },
  image: {
    width: 170,   
    borderRadius: 5,
    height: 170
  },
});
