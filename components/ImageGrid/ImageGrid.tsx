import React from 'react';
import { View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from '../../App';
import { useNavigation } from '@react-navigation/native';

interface ImageGridProps {
  images: { id: number; uri: string }[];
  columns: number;
  
}

export const ImageGrid: React.FC<ImageGridProps> = ({ images, columns }) => {
  const { navigate } = useNavigation<BottomTabNavigationProp<RootStackParamList>>();

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigate('ImageDetails', { imageId: item.id })}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.uri }} style={styles.image} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={images}
      renderItem={renderItem}
      numColumns={columns}
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
// import React, { useState } from 'react';
// import { View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

// const images = [
//   { id: 1, uri: 'https://source.unsplash.com/random/400x400?nature' },
//   { id: 2, uri: 'https://source.unsplash.com/random/400x400?water' },
//   { id: 3, uri: 'https://source.unsplash.com/random/400x400?mountain' },
//   { id: 4, uri: 'https://source.unsplash.com/random/400x400?beach' },
// ];

// interface ImageGridProps {
//   images: { id: number; uri: string }[];
//   columns: number;
//   onImageSelected: (uri: string) => void;
// }

// export const ImageGrid: React.FC<ImageGridProps> = ({ onImageSelected }) => {
//   const [, setSelectedImageId] = useState<number | null>(null);

//   const renderItem = ({ item }) => {
//     const handleImagePress = () => {
//       setSelectedImageId(item.id);
//       onImageSelected(item.uri);
//     };

//     return (
//       <TouchableOpacity onPress={handleImagePress} style={styles.imageContainer}>
//         <Image source={{ uri: item.uri }} style={styles.image} />
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <FlatList
//       data={images}
//       renderItem={renderItem}
//       numColumns={2}
//       keyExtractor={(item) => item.id.toString()}
//       contentContainerStyle={styles.container}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     paddingHorizontal: 10,
//     paddingTop: 10,
//   },
//   imageContainer: {
//     flex: 1,
//     marginHorizontal: 5,
//     marginBottom: 10,
//   },
//   image: {
//     width: 170,
//     borderRadius: 5,
//     height: 170,
//   },
// });
