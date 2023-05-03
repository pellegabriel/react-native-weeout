import { useState } from "react";
import ImageView from "react-native-image-viewing";
import { View, StyleSheet } from "react-native";

const images = [
    {
      uri: "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4",
    },
    {
      uri: "https://images.unsplash.com/photo-1573273787173-0eb81a833b34",
    },
    {
      uri: "https://images.unsplash.com/photo-1569569970363-df7b6160d111",
    },
  ];
  
  export const ImageGrid = () => {
    const [visible, setIsVisible] = useState(false);

    return (
        <View         style={styles.image}
        >
        <ImageView
        images={images}
        imageIndex={0}
        visible={visible}
        onRequestClose={() => setIsVisible(false)}
      />
      </View>
      );
  }
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