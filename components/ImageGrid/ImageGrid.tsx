import React from 'react';
import {  StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { TFakeImages, fakeImages } from '../../utils/fakeData';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from '../../App';

export const ImageGrid = () => {
  const { navigate } = useNavigation<BottomTabNavigationProp<RootStackParamList>>();

  const renderItem: React.FC = ({ item }: { item: TFakeImages }) => (
    <TouchableOpacity style={styles.imageContainer}>
      <Image source={{ uri: item.uri }} style={styles.image} />
    </TouchableOpacity>
  );

  return (
    <FlatList
      numColumns={2}
      data={fakeImages}
      renderItem={renderItem}
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
    height: 170,
  },
});
