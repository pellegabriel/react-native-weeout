import React from 'react';
import { View } from 'react-native';
import { ImageGrid } from './ImageGrid';

const images = [
  { id: 1, uri: 'https://source.unsplash.com/random/400x400?nature' },
  { id: 2, uri: 'https://source.unsplash.com/random/400x400?water' },
  { id: 3, uri: 'https://source.unsplash.com/random/400x400?mountain' },
  { id: 4, uri: 'https://source.unsplash.com/random/400x400?beach' },
];

const Grid = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageGrid images={images} columns={2} />
    </View>
  );
};

export default Grid;
