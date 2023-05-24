import { useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Input } from "react-native-elements";
import { fakeCategories, fakeImages } from '../utils/fakeData';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from '..//App';

export const SearchScreen = () => {
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const [data, setData] = useState(fakeCategories);
    const { navigate } = useNavigation<BottomTabNavigationProp<RootStackParamList>>();
  
    const SearchCategory = ({ title, id, isSelected, onPress }) => {
      return (
        <TouchableOpacity style={styles.category} onPress={onPress}>
          <Text style={isSelected ? styles.categoryTextSelected : styles.categoryText}>
            {title}
          </Text>
        </TouchableOpacity>
      );
    };
  
    const handleCategoryClick = (categoryId) => {
      const dataCopy = [...data];
      const index = dataCopy.findIndex((categoria) => categoria.id === categoryId);
      const categoriaSeleccionada = dataCopy.splice(index, 1)[0];
      dataCopy.unshift(categoriaSeleccionada);
  
      setData(dataCopy);
      setSelectedCategoryId(categoryId);
    };
  
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Encuentra el evento perfecto para ti</Text>
        <Input
          inputStyle={styles.input}
          placeholder="Correr en el bosque..."
          containerStyle={styles.inputContainer}
          inputContainerStyle={styles.inputInnerContainer}
        />
        <ScrollView horizontal style={styles.categoriesList}>
          {data.map((category) => (
            <SearchCategory
              key={category.id}
              title={category.title}
              id={category.id}
              isSelected={category.id === selectedCategoryId}
              onPress={() => handleCategoryClick(category.id)}
            />
          ))}
        </ScrollView>
  
        <View style={styles.listOfImages}>
          {fakeImages.map(({ uri, id }) => (
            <TouchableOpacity
              key={id}
              style={styles.imageContainer}
              // onPress={() => navigate('ImageDetails', { imageId: id })}
            >
              <Image source={{ uri }} style={styles.image} />
              <Text style={styles.titleImage}>Encuentra el evento perfecto para ti</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
  };

const styles = StyleSheet.create({
    titleImage:{
        width: 160,
        fontSize: 12,
        padding: 3
    },
    container: {
      flex: 1,
      paddingVertical: 100,
      display: 'flex',
      backgroundColor: '#fff',
    },
    title: {
      paddingHorizontal: 40,
      fontSize: 40,
      display: 'flex',
      marginBottom: 40,
      fontWeight: 'bold',
      justifyContent:'flex-start',
    },
    inputContainer: {
        paddingHorizontal: 40,
    },
    inputInnerContainer: {
        borderBottomWidth: 0,
    },
    input: {
        paddingHorizontal: 8,
        borderWidth: 1,
        borderColor: '#4e4e4e',
    },
    categoriesList: {
      paddingHorizontal: 40,
      paddingVertical: 20,
      marginBottom: 20
    },
    category: {
        marginRight: 16
    },
    categoryText: {
        fontSize: 20,
        display: 'flex',
        fontWeight: 'bold',
        justifyContent:'flex-start',
    },
    categoryTextSelected: {
        all: 'inset',
        fontSize: 20,
        display: 'flex',
        color: '#4e4e4e',  
        fontWeight: 'bold',
        justifyContent:'flex-start',
    },
    listOfImages: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 100


      },
      imageContainer: {
        marginVertical: 10,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: '#f5694d',
      },
      image: {
        width: 160,
        height: 160,
        borderTopRadius: 5,
      },
});